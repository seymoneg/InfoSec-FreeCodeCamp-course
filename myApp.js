const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet.hidePoweredBy()); // hide how website is powered
app.use(helmet.frameguard({action: 'deny'})); // prevent clickjacking attempts
app.use(helmet.xssFilter({})); // prevent malicious scripts being introduced by sanitizing inputs on each request
app.use(helmet.noSniff({})); // instructs browser to not bypass the content type












































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
