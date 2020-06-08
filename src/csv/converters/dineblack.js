const { schema } = require('../lib/airtable');
// we dont need a mapping here as the dataset matches the schema from Airtable

/**
 * 
 * @param {*} record 
 */
const convertToAirtable = (record) => {
    const result = Object.assign({}, schema);

    for (field in record) {
        result[field] = record[field]
    }
    return result;
}

module.exports = {
    convertToAirtable
}