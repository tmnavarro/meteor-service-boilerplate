import sinon from 'sinon';
import { expect } from 'chai';
import { MathTimesService } from './index';

describe('Maths Times Service', function() {

  describe('Endpoint', function() {

    it('Should return the summed value', function() {

      const res = {
        end: () => {},
      };
      const resSpy = sinon.spy(res, 'end');

      const req = {
        args: {
          values: [100, 2],
        }
      };

      MathTimesService.endpoint(req, res);

      expect(resSpy.withArgs(200).calledOnce).to.eql(true);

    });

    describe('Addition Arguments', function() {

      it('Should accept an array of values in values property', function() {

        const fn = () => {

          MathTimesService.checkTimesArguments({
            values: [123, 101, 30, 50]
          });

        }

        expect(fn).to.not.throw();

      });

      it('Should throw if values argument is a string, number, object or undefined', function() {

        const fn_string = () => {

          MathTimesService.checkTimesArguments({
            values: '123',
          });

        }

        const fn_number = () => {

          MathTimesService.checkTimesArguments({
            values: '123',
          });

        }

        const fn_object = () => {

          MathTimesService.checkTimesArguments({
            values: {},
          });

        }

        const fn_undefined = () => {

          MathTimesService.checkTimesArguments();

        }

        expect(fn_string).to.throw();
        expect(fn_number).to.throw();
        expect(fn_object).to.throw();
        expect(fn_undefined).to.throw();

      });


      it('Should throw if you pass unexpected arguments', function() {

        const fn = () => {

          MathTimesService.checkTimesArguments({
            extraArgs: 123,
            values: '123',
          });

        }

        expect(fn).to.throw();

      });

    });

    describe('Times Method', function() {

      it('Should times numbers together in array', function() {

        const result = MathTimesService.timesNumbers([100, 10]);
        const result2 = MathTimesService.timesNumbers([10, 3]);

        expect(result).to.eql(1000);
        expect(result2).to.eql(30);

      });

      it('Arguments should be an array', function() {

        const fn = () => MathTimesService.timesNumbers('thing');
        const fn2 = () => MathTimesService.timesNumbers(100);

        expect(fn).to.throw();
        expect(fn2).to.throw();

      });

    });

  });

});
