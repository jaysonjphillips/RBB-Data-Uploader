
const base =  require('./airtable-provider')
const fancyLog = require('../utils').fancyLog

function listTable(name, onComplete) {
  const tableData = []
  base(name).select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 50000,
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    fancyLog(`Fetched ${records.length} records`)
  
    records.forEach(function(record) {
      tableData.push(record.fields)
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    if (records.length >= 100) {
      fancyLog('Fetching additional records')
    }
    fetchNextPage();

  }, function done(err) {
    if (err) { console.error(err); return; }
    fancyLog('All records fetched')
    // console.log(tableData)
    onComplete(tableData)
  });
}

module.exports = listTable