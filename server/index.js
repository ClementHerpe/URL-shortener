const express = require ('express');
const cors = require ('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express ();

app.use(helmet()); // help secure Express app by setting HTTP headers
app.use(morgan('tiny')); // HTTP request logger middleware for node.js with minimal output
app.use(cors()); // middleware that can be used to enable CORS with various options
app.use(express.json()); // only accepting json data

app.get('/', (req, res) => {
    res.json({
        message: 'simpleURL - Simplier URL for simplier life by CH'
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
