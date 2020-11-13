const express = require ('express');
const cors = require ('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const yup = require ('yup');
const monk = require ('monk'); // to talk to mongoDB databases
const path = require('path');
const {nanoid} = require ('nanoid');

require('dotenv').config();

const db = monk(process.env.MONGO_URI);
const urls = db.get('urls');
urls.createIndex({slug: 1}, {unique: true});

const app = express ();

app.use(helmet()); // help secure Express app by setting HTTP headers
app.use(morgan('tiny')); // HTTP request logger middleware for node.js with minimal output
app.use(cors()); // middleware that can be used to enable CORS with various options
app.use(express.json()); // only accepting json data
app.use(express.static(path.join(__dirname, '../my-app/dist')));

// app.get('/', express.static('../my-app/dist'));

const schema = yup.object().shape({ // Define format required
    slug: yup.string().trim().matches(/[\w\-]/i),
    url: yup.string().trim().url().required(),
})

app.get('/:id', async (req, res) => {
    // redirect to given URL
    const {id : slug} = req.params;
    try {
        const url = await urls.findOne({slug});
        if (url) {
            res.redirect(url.url);
        }
        res.redirect(`/?error=${slug} not found`);
    } catch (error) {
        res.redirect(`/?error=Link no found`);
    }
});

app.post('/url', async (req, res, next) => {
    // create short URL
    let { slug, url } = req.body;
    try {
        await schema.validate({
            slug,
            url,
        });
        if (!slug) {
            slug = nanoid(5); // if no slug (since not required) - we generate one
        } else {
            const existing = await urls.findOne({ slug });
            if (existing) {
                throw new Error ('Slug already in use.');
            }
        }
        slug = slug.toLowerCase();
        const newUrl = {
            url,
            slug,
        }
        const created = await urls.insert(newUrl);
        res.json(created);
    } catch (error) {
        next(error);
    }
});

app.use((error, req, res, next) => {
    if (error.status) {
        res.status(error.status);
    } else {
        res.status(500);
    }
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? 'All good' : error.stack,
    })
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
