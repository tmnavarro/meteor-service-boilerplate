const { defineSupportCode } = require('cucumber')

// create an insance of the service
// call the endpoint sending arguments for a request email


defineSupportCode(function({Given, When, Then}) {

  Given('A request for {roles}', function (roles, callback) {

    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Then('I should recieve request sent', function (callback) {

    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

});
