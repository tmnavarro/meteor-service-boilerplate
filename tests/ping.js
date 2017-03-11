import sinon                    from 'sinon';
import { expect               } from 'chai';
import { PingRPC, PingHandler } from '../imports/rpc/ping';


describe("Ping", () => {

  describe("RPC", () => {

    let Crud;
    let req;
    let res;

    beforeEach(function() {

      Crud = {
        read: sinon.spy(),
      };

      res = {
        end: sinon.spy(),
      }

    });

    it("Creates read endpoint without crashing", function() {

      PingRPC(Crud, PingHandler);

      expect(Crud.read.calledWith('ping')).to.be.ok;

    });

    it('Should return ping 1', function() {

      PingHandler(req, res)

      expect(res.end.calledWith(sinon.match({ ping: 1 }))).to.be.ok;

    });

  });

});
