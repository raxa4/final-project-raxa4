import 'dotenv/config'
import express, { json } from 'express';
import { getAll, getPost } from './data/posts.js';

const app = express();

const PORT = process.env.PORT

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');


    next();
});
app.use(express.static('static'));

app.get('/admin', (req, res) => {
    res.send('admin page');
})
app.get('/json', (req, res) => {
    res.json({ name: 'boban', ocupation: 'runner' })
})

app.get('/post', (req, res) => {
    try {
        let offset = req.query.offset ? parseInt(req.query.offset) : 0;
        let limit = req.query.limit ? parseInt(req.query.limit) : 6;
        let posts = getAll();

        res.json({
            posts: posts.slice(offset, offset + limit),
            totalSize: posts.length
        });

    } catch (e) {
        res.status(400).json(e.message);
    }
});


app.get('/post/:id', (req, res) => {
    try {
        let post = getPost(req.params.id);
        res.json(post);
    } catch (e) {
        res.status(400).json(e.message);
    }
})

app.listen(PORT, () => {
    console.log(`server runing ${PORT}`);

})