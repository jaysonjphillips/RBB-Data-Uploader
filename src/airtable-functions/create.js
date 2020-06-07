
const base =  require('./airtable-provider')
const fancyLog = require('../utils').fancyLog
const listRecords = require('./list')
const _ = require('lodash')


function create(tablename) {
  // TODO: (bmc) Need to get this list from a CSV file referenced as an arg to the command
  const listToUpload = [
    {
      fields: {
        "Name": "Brent",
        "Business Name": "Brent M Clark",
        "Category": "Entertainment",
        "Zip Code": 55330,
        "Website": "https://brentmclark.dev/",
        "Email": "brentmclark@gmail.com",
        "Approved": false,
        "In Need": true,
      }
    },
  ]
  listRecords(tablename, function createRecords(tableData) {
    const dedupedUploadList = []
    listToUpload.forEach(function(row) {
      const recordAlreadyExists = tableData.find(function(datum) {
        // TODO: (bmc) Need to dedupe against additional fields.
        return row.fields.Name === datum.Name
      })
      if (!recordAlreadyExists) {
        dedupedUploadList.push(row)
      }
    })
    if (dedupedUploadList.length > 0) {
      base(tablename).create(dedupedUploadList, function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        fancyLog(`Created ${records.length} new records`)
        records.forEach(function (record) {
          console.log(record.getId());
        });
      });
    } else {
      fancyLog(`No new records created`, 'warning')
    }
  })
}

module.exports = create