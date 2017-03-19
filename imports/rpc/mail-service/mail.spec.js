import { Mail } from './mail';
import { Config } from './config';
import { expect } from 'chai';

describe('Mail', function() {

  describe('request email', function() {

    it('Should return successfully', function() {

      const Provider = (key) => {

        return {
          API: (req, cb) => {
          },
          mail: {
            Substitution: (key, value) => {
              return value
            },
            Personalization: () => {
              return {
                addTo: email => email,
                addSubstitution: substitutions => true,
              }
            },
            Email: email => email,
          }
        }

      };

      const request  = {
        testing:    true,
        templateId: 'request',
        substitutions: {
          actor: 1,
          recipient: 1,
          sections_list: 'example, example2 & example3',
        }
      };

      const mail = new Mail(Provider, Config, request);

      // you'll be able assert the each of the recipients where added by the provider.

      mail.addRecipients([
        'jlacey@gmail.com',
        'exam@exmpl.co.uk',
      ]);

      const result = mail.send();

      expect(result).to.be.equal(true);

    });

  });

});
