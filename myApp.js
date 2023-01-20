const express = require('express');
const helmet = require('helmet');
const app = express();

// hide how website is powered
app.use(helmet.hidePoweredBy()); 
// prevent clickjacking attempts
app.use(helmet.frameguard({action: 'deny'})); 
// prevent malicious scripts being introduced by sanitizing inputs on each request
app.use(helmet.xssFilter({})); 
// instructs browser to not bypass the content type
app.use(helmet.noSniff({})); 
//prevent IE users from executing downloads in the trusted site’s context
app.use(helmet.ieNoOpen({})); 
// ask user browsers to avoid using insecure HTTP for a specific amount of time
ninetyDaysInSeconds = 90*24*60*60;
app.use(helmet.hsts({maxAge: ninetyDaysInSeconds, force: true})) 
// disable DNS prefetching
app.use(helmet.dnsPrefetchControl({})); 
// disable caching so that users download the newest version of software
app.use(helmet.noCache({})); 
//set and configure Content Security Policy to prevent the injection of anything unintended into page
app.use(helmet.contentSecurityPolicy({ directives: {defaultSrc : ["'self'"], scriptSrc : ["'self'", 'trusted-cdn.com']}})); 










































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
