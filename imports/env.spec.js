import { expect } from 'chai';

describe('ENVRIONMENT VARIABLES', function() {

  it('UNIT_TESTING should be set', function() {

    expect(process.env.UNIT_TESTING).to.be.equal('true');

  });

});
