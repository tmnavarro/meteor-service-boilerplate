
export class PingService {

  constructor(Crud, ServiceModel) {

    this.ServiceModel = ServiceModel;

    Crud.read('ping', this.endpoint.bind(this));

  }

  endpoint(req, res) {

    // Currently this will return all the services that have been registerd
    res.end(this.ServiceModel.find());

  }

}
