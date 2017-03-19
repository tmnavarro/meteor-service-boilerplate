import { Config } from './config.js'
import { expect } from 'chai';

describe('Config', function() {

  describe('Provider API Key', function() {

    it('Should be defined', function() {

      expect(typeof Config.api.key === 'string').to.be.equal(true);

    });

  });

  describe('Request Template', function() {

    it('Should be defined', function() {

      expect(typeof Config.templates.request === 'object').to.be.equal(true);

    });

    it('Should contain an id', function() {

      expect(typeof Config.templates.request.id === 'string').to.be.equal(true);

    });

    describe('Substitutions', function() {

      it('Actor should be defined as a function', function() {

        expect(typeof Config.templates.request.substitutions.actor === 'function').to.be.equal(true);

      });

      it('Recipient should be defined as a function', function() {

        expect(typeof Config.templates.request.substitutions.recipient === 'function').to.be.equal(true);

      });

      describe('Sectons list', function() {

        it('Should be defined as a function', function() {

          expect(typeof Config.templates.request.substitutions.sections_list === 'function').to.be.equal(true);

        });

        it('Should return a string of the argument', function() {

          const result = Config.templates.request.substitutions.sections_list(123);
          const result2 = Config.templates.request.substitutions.sections_list('example');

          expect(result).to.be.equal('123');
          expect(result2).to.be.equal('example');

        });

      });

    });

  });

});
