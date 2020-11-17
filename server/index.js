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
// app.use(express.static(path.join(__dirname, '../my-app/dist'))); not working 
// app.use(express.static(__dirname+'../my-app/dist')); not working
app.use(express.static('./'));

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

// app.get('/test', async (req, res) => {
//     // test
//     try {
//         res.send ({message :'hello world'});
//     } catch (error) {
//         console.log(error);
//     }
// });

app.post('/url', async (req, res, next) => {
    // create short URL
    console.log('on entre dans le POST');
    let { slug, url } = req.body;
    try {
        await schema.validate({
            slug,
            url,
        });
        console.log('slug :', slug, ' url :', url);
        console.log('schema validé');
        if (!slug) {
            slug = nanoid(5); // if no slug (since not required) - we generate one
        } else {
            console.log('on cherche si le slug est déjà dans la DB');
            const existing = await urls.findOne({ slug });
            console.log('already in DB : ', existing);
            if (existing) {
                throw new Error ('Slug already in use.');
            }
        }
        console.log('slug vérifié');
        slug = slug.toLowerCase();
        const newUrl = {
            url,
            slug,
        }
        console.log('nouvel URL', newUrl)
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
