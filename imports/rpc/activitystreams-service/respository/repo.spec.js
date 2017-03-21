import sinon from 'sinon';
import { expect } from 'chai';
import { ActivityStreamRepository } from './index';

describe("Activity Stream Repo", function() {

  it('Stubbing find function works', function() {

    const as = new ActivityStreamRepository({}, {});

    sinon.stub(as, 'find', () => {

      return [
        {
          id: 123,
          elementId: 123,
        }
      ];

    });

    const f = as.find();

    expect(f[0].id).to.be.equal(123);

    as.find.restore();

  });

});
