import { AccountResolver } from './AccountsResolver';
import { expect } from 'chai';

describe('AccountResolver', function() {

  it('Should return an account found by the AccountRepository', function() {

    const context = {};
    const AccountRepository = {
      findUser: function(id) {

        if (id === 1) return { name: 'Jake' };

        if (id === 2) return { name: 'Bob' };

      }
    };

    const accountOne = AccountResolver.call(context, AccountRepository, 1);
    const accountTwo = AccountResolver.call(context, AccountRepository, 2);

    expect(accountOne.name).to.be.equal('Jake');
    expect(accountTwo.name).to.be.equal('Bob');

  });

});
