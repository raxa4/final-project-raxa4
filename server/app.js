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
    let post = getAll()
    res.json(post)
})

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