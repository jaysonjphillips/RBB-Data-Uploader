const schema = Object.freeze({
    'ID': 0,
    'Name': '',
    'Email': '',
    'Business Name': '',
    'Category': '',
    'Zip Code': '',
    'Business Description': '',
    'Website': '',
    'In Need': true,
    'CreatedAt': '',
});

const normalizeRecord = (data, recordConverter, normalizedArr) => {
    let newRecord = {
        fields: recordConverter(data) 
    }
    normalizedArr.push(newRecord);
}

module.exports = {
    schema,
    normalizeRecord
}