import sinon from 'sinon';
import { expect } from 'chai';
import { MathTakeawayService } from './index';

describe('Math Takeaway Service', function() {

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

      MathTakeawayService.endpoint(req, res);

      expect(resSpy.withArgs(-150).calledOnce).to.eql(true);

    });

    describe('Arguments', function() {

      it('Should accept an array of values in values property', function() {

        const fn = () => {

          MathTakeawayService.checkTakeawayArguments({
            values: [123, 30, 2],
          });

          expect(fn).to.not.throw();

        }

      });

      it('Should throw if values arguments is a string, number, object or undefined', function() {

        const fn_string = () => {

          MathTakeawayService.checkTakeawayArguments({
            values: '123',
          });

        }

        const fn_number = () => {

          MathTakeawayService.checkTakeawayArguments({
            values: '123',
          });

        }

        const fn_object = () => {

          MathTakeawayService.checkTakeawayArguments({
            values: {},
          });

        }

        const fn_undefined = () => {

          MathTakeawayService.checkTakeawayArguments();

        }

        expect(fn_string).to.throw();
        expect(fn_number).to.throw();
        expect(fn_object).to.throw();
        expect(fn_undefined).to.throw();

      });

      it('Should throw if you pass any unexpect arguments', function() {

        const fn = () => {

          MathTakeawayService.checkTakeawayArguments({
            extraArgs: 123,
            values: [123, 123, 123],
          });

        }

        expect(fn).to.throw();

      });

    });

    describe('Method', function() {

      it('Should takeaway numbers together in array', function() {

        const result  = MathTakeawayService.takeaway([30, 20, 1]);
        const result2 = MathTakeawayService.takeaway([300, 20, 20]);

        expect(result).to.eql(-51);
        expect(result2).to.eql(-340);

      });

      it('Arguments should be an array and throw if anything else', function() {

        const fn = () => MathTakeawayService.takeaway('thing');
        const fn2 = () => MathTakeawayService.takeaway(100);

        expect(fn).to.throw();
        expect(fn2).to.throw();

      });

    });

  });

});
