import sinon from 'sinon';
import { expect } from 'chai';
import { ActivityStreamService } from './index';

describe('Activity Stream Service', function() {

  describe('Endpoints', function() {

    describe('CREATE', function() {

      describe('Parse Arguments', function() {

        it('Should accept if objecType, actor & verb as strings', function() {

          const fn = () => {

            ActivityStreamService.checkCreateArguments({
              objectType: 'string',
              actor:      'string',
              verb:       'string',
            });

          }

          expect(fn).to.not.throw();

        });

        it('Should throw if object, actor and verb are undefined', function() {

          const fn = () => {

            ActivityStreamService.checkReadArguments();

          }

          expect(fn).to.throw();

        });

        it('Should throw if object, actor and verb are objects', function() {

          const fn = () => {

            ActivityStreamService.checkCreateArguments({
              objectType: {},
              actor:      {},
              verb:       {},
            });

          }

          expect(fn).to.throw();

        });

        it('Should throw if you pass any extra arguments', function() {

          const fn = () => {

            ActivityStreamService.checkCreateArguments({
              example:    'who',
              objectType: 'string',
              actor:      'string',
              verb:       'string',
            })

          }

          expect(fn).to.throw();

        });

      });

    });

    describe('READ', function() {

      describe("Parse Arguments", function() {

        it('Should objectType & verb as strings', function() {

          const fn = () => {

            ActivityStreamService.checkReadArguments({
              objectType: 'example',
              verb: 'another verb',
            });

          }

          expect(fn).to.not.throw();

        });

        it('Should throw if object & verb are undefined', function() {

          const fn = () => {

            ActivityStreamService.checkReadArguments();

          }

          expect(fn).to.throw();

        });

        it('Should throw if object & verb are object', function() {

          const fn = () => {

            ActivityStreamService.checkReadArguments({
              objectType: {},
              verb:       {},
            });

          }

          expect(fn).to.throw();

        });

        it('Should throw if any extra arguments are passed', function() {

          const fn = () => {

            ActivityStreamService.checkReadArguments({
              someextraArg: 'somthign here',
              objectType: 'example',
              verb:       'another verb',
            });

          }

          expect(fn).to.throw();

        });

      });

    });

  })

});
