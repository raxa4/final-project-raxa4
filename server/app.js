import express from 'express';

const app = express();

app.get('/admin', (req, res) => {
    res.send('admin page');
})
app.get('/json', (req, res) => {

})

const PORT = 3000;
app.listen(PORT, () => {
    console.log('server runing ${PORT}');

})