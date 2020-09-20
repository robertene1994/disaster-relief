const express = require('express');
const http = require('http');
const path = require('path');

fs.readFile('dist/index.html', 'utf8', (err, data) => {
    const searchString = 'GOOGLE_MAPS_API_KEY';
    const re = new RegExp('^.*' + searchString + '.*$', 'gm');
    const formatted = data.replace(re, process.env.GOOGLE_MAPS_API_KEY);

    fs.writeFile(someFile, formatted, 'utf8', (err) => {
        if (err)
            return console.log(err);
    });
});

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '4200';
app.set('port', port);


http.createServer(app).listen(port, () => {
    console.log(`Server started on port ${port}.`);
});
