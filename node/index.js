const fs = require('fs');
const path = require('path');

const filePath = './index.md';

fs.readFile(path.resolve(__dirname, filePath), (err, data) => {
    console.log(data);
});
