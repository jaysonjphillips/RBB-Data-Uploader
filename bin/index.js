#!/usr/bin/env node

require('dotenv').config();

const yargs = require("yargs");
const createRecords = require('../src/airtable-functions/create')

const options = yargs
 .usage('Usage: -t <tablename')
 .option("t", { alias: "tablename", describe: "The name of the table you wish to update", type: "string", demandOption: true })
 .argv;

createRecords(options.tablename)
