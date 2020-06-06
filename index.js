var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyHNkMrp11T6Jx6y'}).base('appFoFzjMcciPUgoK');

base('Businesses').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('ID', record.get('ID'));
        console.log('Name', record.get('Name'));
        console.log('Business Name', record.get('Business Name'));
        console.log('Category', record.get('Category'));
        console.log('Zip Code', record.get('Zip Code'));
        console.log('Website', record.get('Website'));
        console.log('Email', record.get('Email'));
        console.log('Retrieved', record.get('Created At'));
        console.log('Approved', record.get('Approved'));
        console.log('Donation Link', record.get('Donation Link'));
        console.log('Business Description', record.get('Business Description'));
        console.log('In Need', record.get('In Need'));
        console.log('Image', record.get('Image'));
        console.log('===================================');

    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

// Airtable.configure({ apiKey: 'YOUR_SECRET_API_KEY' })