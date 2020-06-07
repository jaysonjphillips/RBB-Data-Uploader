const AirtableFormats = require('./airtable');

const AirtableMapping = {
    includeOnWebsite: 'Approved',
    pageUrl: 'Donation Link',
    organizerName: 'Name',
    category: 'Category',
    progress:   'In Need'
}

const convertRecordToAirtable = (record) => {
    const result = Object.assign({}, AirtableFormats.schema);

    for(field in record) {
        if(AirtableMapping[field]) {
            let mappedField = AirtableMapping[field];    
            mappedField === 'In Need' ? 
                result[mappedField] = record[field] < 1 ? true : false : 
                result[mappedField] = record[field]
        }
    }
    return result;
}

const normalizeRecord = (data, normalizedArr) => {
    let newRecord = {
        fields: convertRecordToAirtable(data) 
    }
    normalizedArr.push(newRecord);
}

module.exports = {
    normalizeRecord
}