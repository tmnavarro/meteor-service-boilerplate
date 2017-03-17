
export class PingService {

  constructor(Crud, ServiceModel) {

    this.ServiceModel = ServiceModel;

    Crud.read('ping', this.endpoint.bind(this));

  }

  endpoint(req, res) {

    res.end(this.ServiceModel.find());

  }

}
