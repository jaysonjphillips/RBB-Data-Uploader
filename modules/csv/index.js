const fs = require('fs');
const csv = require('csv-parser');
const Airtable = require('airtable');
const {normalizeRecord} = require('./lib/airtable');
const Converters = require('./converters');
const Handlers = require('./handlers');

require('dotenv').config();

const base = new Airtable({apiKey: process.env.MY_AIRTABLE_API_KEY}).base('appFoFzjMcciPUgoK');

function main() {
    const [,, csvFile, source, option] = process.argv;
    const CsvSource = Converters[source] || null;
    const uploadArray = [];
    
    let commitData = true;
    if(option && option === '--dry-run') commitData = false;
    
    if(!CsvSource) process.exit()
    
    fs.createReadStream(csvFile)
      .pipe(csv())
      .on('data', row => normalizeRecord(row, CsvSource.convertToAirtable, uploadArray))
      .on('end', () => console.log('CSV file processed.'))
    
    if(!commitData) {
        console.log('Dry Run completed. 0 records uploaded');
        process.exit();
    } 
    base('Businesses').create(uploadArray, Handlers.uploadDataResponse);
}

module.exports = {
    main
}