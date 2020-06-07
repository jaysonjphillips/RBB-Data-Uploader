const schema = Object.freeze({
    'ID': 0,
    'Name': '',
    'Email': '',
    'Business Name': '',
    'Category': '',
    'Zip Code': '',
    'Business Description': '',
    'Website': '',
    'In Need': false,
    'CreatedAt': '',
});

const createResultHandler = (error, records) => {
    if(error) return console.log(`Error: ${error}`);
    for(const record of records) {
        console.log(`${record.get('ID')} | ${record.get('Name')} has been uploaded`);
    }
    return console.log(`${records.length} records uploaded`);
}

module.exports = {
    schema, 
    createResultHandler
}