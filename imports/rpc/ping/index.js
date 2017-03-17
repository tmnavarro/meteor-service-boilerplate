
export class PingService {

  constructor(Crud, { ServiceModel, ServiceRepository }, ROOT_URL) {

    this.ServiceModel = ServiceModel;

    // register the endpoint.
    ServiceRepository.registerEndpoint({
      Crud,
      type: 'read',
      name: 'ping',
      handler: this.endpoint.bind(this),
      ROOT_URL,
      ServiceModel,
    });

  }

  endpoint(req, res) {

    res.end(this.ServiceModel.find());

  }

}
