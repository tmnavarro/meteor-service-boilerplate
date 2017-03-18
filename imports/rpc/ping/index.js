
export class PingService {

  constructor(Crud, { ServiceModel, ServiceRepository }, ROOT_URL) {

    this.ServiceModel = ServiceModel;
    this.ServiceRepository = ServiceRepository;

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

    this.ServiceRepository.networkCall(this.ServiceModel, 'ping', 'read', {
      argument1: true,
      argument1: false,
    })

    res.end(this.ServiceModel.find());

  }

}
