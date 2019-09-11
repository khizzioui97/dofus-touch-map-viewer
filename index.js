var express = require('express'),
    path = require('path'),
    app = express(),
    PORT = 3095,
    index = 'index.html',
    assetsPath = '/src';

app.use(express.static(path.resolve('.' + assetsPath)));
app.get('/', (req, res) => res.sendFile(path.resolve('./' + index)));
app.listen(PORT, () => console.log('Server listening on localhost:' + PORT));