const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schemasFiles = require('fs').readdirSync(`${__dirname}/schemas`);

var models = {};
for (let file of schemasFiles) {
    let fileName = file.slice(0,-3); // remove .js extension
    let schema = require(`./schemas/${fileName}`);
    if (schema instanceof Schema) {
      console.log(`registering ${fileName}...`)
      models[fileName] = mongoose.model(fileName, schema);
    } else {
      models[fileName] = mongoose.model(fileName, new Schema(schema));
    }
}

process.getModel = function (name) {
    return models[name];
}
