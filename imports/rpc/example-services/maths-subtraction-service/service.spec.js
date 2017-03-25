import sinon from 'sinon';
import { expect } from 'chai';
import { MathSubtractionService } from './index';

describe('Math Subtraction Service', function() {

  describe('Endpoint', function() {

    it('Should return the summed value', function() {

      const res = {
        end: () => {},
      };
      const resSpy = sinon.spy(res, 'end');

      const req = {
        args: {
          values: [100, 20, 30],
        },
      }

      MathSubtractionService.endpoint(req, res);

      expect(resSpy.withArgs(-150).calledOnce).to.eql(true);

    });

    describe('Arguments', function() {

      it('Should accept an array of values in values property', function() {

        const fn = () => {

          MathSubtractionService.checkSubtractionArguments({
            values: [123, 30, 2],
          });

          expect(fn).to.not.throw();

        }

      });

      it('Should throw if values arguments is a string, number, object or undefined', function() {

        const fn_string = () => {

          MathSubtractionService.checkSubtractionArguments({
            values: '123',
          });

        }

        const fn_number = () => {

          MathSubtractionService.checkSubtractionArguments({
            values: '123',
          });

        }

        const fn_object = () => {

          MathSubtractionService.checkSubtractionArguments({
            values: {},
          });

        }

        const fn_undefined = () => {

          MathSubtractionService.checkSubtractionArguments();

        }

        expect(fn_string).to.throw();
        expect(fn_number).to.throw();
        expect(fn_object).to.throw();
        expect(fn_undefined).to.throw();

      });

      it('Should throw if you pass any unexpect arguments', function() {

        const fn = () => {

          MathSubtractionService.checkSubtractionArguments({
            extraArgs: 123,
            values: [123, 123, 123],
          });

        }

        expect(fn).to.throw();

      });

    });

    describe('Method', function() {

      it('Should subtraction numbers together in array', function() {

        const result  = MathSubtractionService.subtraction([30, 20, 1]);
        const result2 = MathSubtractionService.subtraction([300, 20, 20]);

        expect(result).to.eql(-51);
        expect(result2).to.eql(-340);

      });

      it('Arguments should be an array and throw if anything else', function() {

        const fn = () => MathSubtractionService.subtraction('thing');
        const fn2 = () => MathSubtractionService.subtraction(100);

        expect(fn).to.throw();
        expect(fn2).to.throw();

      });

    });

  });

});
