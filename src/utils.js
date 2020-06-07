const chalk = require('chalk');
const boxen = require("boxen");

const boxenOptions = {
  success: {
    padding: 0,
    margin: 0,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555"
  },
  info: {
    padding: 0,
    margin: 0,
    borderStyle: "round",
    borderColor: "blue",
    backgroundColor: "#555555"
  },
  warning: {
    padding: 0,
    margin: 0,
    borderStyle: "round",
    borderColor: "yellow",
    backgroundColor: "#555555"
  }
};

function fancyLog(msg, type='info') {
  const fancyMessage = chalk.white.bold(msg);
  const msgBox = boxen( fancyMessage, boxenOptions[type] );
  console.log(msgBox);
}

module.exports.fancyLog = fancyLog