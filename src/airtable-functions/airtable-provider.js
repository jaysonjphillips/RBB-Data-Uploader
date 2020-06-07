const Airtable = require('airtable')

module.exports = new Airtable({apiKey: process.env.MY_AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID)