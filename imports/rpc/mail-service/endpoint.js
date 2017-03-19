
export class MailService {

  constructor(Crud, ServiceRepository, Mail) {

    this.ServiceRepository = ServiceRepository;
    this.Mail = Mail;

    ServiceRepository.registerEndpoint({
      Crud,
      type: 'create',
      name: 'mail',
      handler: this.endpoint.bind(this),
    });

  }

  endpoint(req, res) {

  }

}
