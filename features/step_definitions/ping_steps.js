import sinon from 'sinon';
import { PingService } from '../../imports/rpc/ping';

const { defineSupportCode } = require('cucumber')


defineSupportCode(function({Given, When, Then}) {

  Given('the ping service', function () {

    const Crud = {};
    const ServiceRepository = {
      registerEndpoint: function() {
      },
      networkCall: function() {
      },
      services: function() {
        return { ping: 1 }
      }
    };

    this.service = new PingService(Crud, ServiceRepository);

  });

  When('I call the endpoint', function () {

    // these would need to be stubbed/mocked also.
    const req = {};
    const res = {
      end: function() {
      }
    };

    this.service.endpoint(req, res);

  });

  Then('return an object', function () {

    // Need to inspec service() on res

  });

})
