const express = require('express');

const app = express();

app.get('/', (req, res) => res.send ('Hola mundo con cafe express'))


app.listen(3000);
    console.log('Server running on port 3000');

