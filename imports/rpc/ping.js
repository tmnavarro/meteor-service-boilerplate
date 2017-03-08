import { Crud } from '../core';

/**
 * read endpoint
 *  - <ROOT_URL>/rpc/ping
 */
Crud.read("ping", (req, res) => {

  /**
   * This should have done it?
   */
  res.end({
    ping: 1,
  });

});
