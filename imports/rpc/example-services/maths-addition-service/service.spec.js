import sinon from 'sinon';
import { expect } from 'chai';
import { MathAdditionService } from './index';

describe('Maths Addtion Service', function() {

  describe('Endpoint', function() {

    it('Should return the summned value', function() {

      const res = {
        end: () => {},
      };
      const resSpy = sinon.spy(res, 'end');

      const req = {
        args: {
          values: [100, 20, 30],
        }
      };

      MathAdditionService.endpoint(req, res);

      expect(resSpy.withArgs(150).calledOnce).to.eql(true);

    });

    describe('Addition Arguments', function() {

      it('Should accept an array of values in values property', function() {

        const fn = () => {

          MathAdditionService.checkAddtionArguments({
            values: [123, 101, 30, 50]
          });

        }

        expect(fn).to.not.throw();

      });

      it('Should throw if values argument is a string, number, object or undefined', function() {

        const fn_string = () => {

          MathAdditionService.checkAddtionArguments({
            values: '123',
          });

        }

        const fn_number = () => {

          MathAdditionService.checkAddtionArguments({
            values: '123',
          });

        }

        const fn_object = () => {

          MathAdditionService.checkAddtionArguments({
            values: {},
          });

        }

        const fn_undefined = () => {

          MathAdditionService.checkAddtionArguments();

        }

        expect(fn_string).to.throw();
        expect(fn_number).to.throw();
        expect(fn_object).to.throw();
        expect(fn_undefined).to.throw();

      });


      it('Should throw if you pass unexpected arguments', function() {

        const fn = () => {

          MathAdditionService.checkAddtionArguments({
            extraArgs: 123,
            values: '123',
          });

        }

        expect(fn).to.throw();

      });

    });

    describe('Addition Method', function() {

      it('Should add numbers together in array', function() {

        const result = MathAdditionService.addNumbers([100, 10, 20]);
        const result2 = MathAdditionService.addNumbers([10, 20]);

        expect(result).to.eql(130);
        expect(result2).to.eql(30);

      });

      it('Arguments should be an array', function() {

        const fn = () => MathAdditionService.addNumbers('thing');
        const fn2 = () => MathAdditionService.addNumbers(100);

        expect(fn).to.throw();
        expect(fn2).to.throw();

      });

    });

  });

});
