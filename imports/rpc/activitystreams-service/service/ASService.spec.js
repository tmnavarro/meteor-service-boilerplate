import sinon from 'sinon';
import { ServiceRepository } from '../../../core';
import { ActivityStreamRepository } from '../respository';
import { ActivityStreamService } from './index';

describe('Activity Stream Service', function() {

  describe('Endpoints', function() {

    describe('READ', function() {

      it('Should return data from the find method in the repo', function() {

        const AS = new ActivityStreamRepository({}, {});

        sinon.stub(AS, 'find', () => {

          return [
            {
              id: 123,
              example: 123,
            },
            {
              id: 123,
              example: 123,
            }
          ]

        });

        const SR = { registerEndpoint: () => { } };
        sinon.stub(SR, 'registerEndpoint');

        const r = new ActivityStreamService({}, SR, AS);

        const res = { end: () => { } };
        sinon.stub(res, 'end', o => console.log(o) );

        r.readEndpoint({}, res);

      });

    });

  })

});
