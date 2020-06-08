const schema = Object.freeze({
    'Name': '',
    'Email': '',
    'Business Name': '',
    'Category': '',
    'Zip Code': '',
    'Business Description': '',
    'Website': '',
    'In Need': true,
    'Storefront': true,
});

const normalizeRecord = (data, converter) => {
    return {
        fields: converter(data)
    }
}

module.exports = {
    schema,
    normalizeRecord
}