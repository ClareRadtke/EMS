const { ready } = require("./db/connection");
const { mainMenuPrompt } = require("./inquirerPrompts");

ready().then(() => {
  mainMenuPrompt();
});
