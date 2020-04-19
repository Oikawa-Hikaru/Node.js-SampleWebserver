const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./', {fallthrough: true}));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.listen(port, () => {
    console.log('Server started...');
    console.log('URL : http://localhost:3000/');
});
