
export class PingService {

  constructor(Crud, ServiceRepository) {

    this.ServiceRepository = ServiceRepository;

    ServiceRepository.registerEndpoint({
      Crud,
      type: 'read',
      name: 'ping',
      handler: this.endpoint.bind(this),
    });

  }

  endpoint(req, res) {

    this.ServiceRepository.networkCall('ping', 'read', {
      argument1: true,
      argument1: false,
    })

    res.end(this.ServiceRepository.services());

  }

}
