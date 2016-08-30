const mongoose = require('mongoose');
const schemasFiles = require('fs').readdirSync(`${__dirname}/schemas`);

var models = {};
for (let file of schemasFiles) {
    let fileName = file.slice(0,-3); // remove .js extension
    let schema = require(`./schemas/${fileName}`);
    models[fileName] = mongoose.model(fileName, new mongoose.Schema(schema));
}

process.getModel = function (name) {
    return models[name];
}