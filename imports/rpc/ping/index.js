
/**
 * read endpoint
 *  - <ROOT_URL>/rpc/ping
 */
export const PingRPC = (Crud, handler) => {

  return Crud.read("ping", handler);

}

/**
 * Handler to return ping of 1.
 *
 * @param Object   req
 *           The request object.
 *
 * @param Object   res
 *           The response object.
 */
export const PingHandler = (req, res) => {

  res.end({
    ping: 1,
  });

}
