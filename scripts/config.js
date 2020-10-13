require('dotenv').config();
const fs = require('fs');

fs.readFile('dist/index.html', 'utf8', (_err, data) => {
    const formatted = data.replace('<%=GOOGLE_MAPS_API_KEY%>', process.env.GOOGLE_MAPS_API_KEY);
    fs.writeFile('dist/index.html', formatted, 'utf8', (err) => {
        if (err)
            return console.log(err);
    });
});
