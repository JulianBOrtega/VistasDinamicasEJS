const fs = require('fs');
const path = require('path');

function get(filename = "json")
{
    return JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', filename + '.json')));
}

module.exports = { get };