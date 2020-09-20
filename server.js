const fs = require('fs');
const express = require('express');
const http = require('http');
const path = require('path');

process.env.GOOGLE_MAPS_API_KEY = "axaxa";
console.log(process.env.GOOGLE_MAPS_API_KEY);

fs.readFile('dist/index.html', 'utf8', (_err, data) => {
    const formatted = data.replace('GOOGLE_MAPS_API_KEY', process.env.GOOGLE_MAPS_API_KEY);
    fs.writeFile('dist/index.html', formatted, 'utf8', (err) => {
        if (err)
            return console.log(err);
    });
});

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '4200';
app.set('port', port);


http.createServer(app).listen(port, () => {
    console.log(`Server started on port ${port}.`);
});
