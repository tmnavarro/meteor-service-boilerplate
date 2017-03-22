/**
 * Activity strea is a singleton
 */

let instance = null;

export class ActivityStreamService {

  constructor(Crud, ServiceRepository, ActivityStreamRepository) {

    if (!instance) {

      instance = this;

      this.ActivityStreamRepository = ActivityStreamRepository;

      ServiceRepository.registerEndpoint({
        Crud,
        type: 'create',
        name: 'activity',
        handler: this.createEndpoint.bind(this),
      });

      ServiceRepository.registerEndpoint({
        Crud,
        type: 'read',
        name: 'activity',
        handler: this.readEndpoint.bind(this),
      });

    }

    return instance;

  }

  readEndpoint(req, res) {

    res.end(this.ActivityStreamRepository.find());

  }

  createEndpoint(req, res) {

    // mock the get method to set method.

    // here I should be able to call find and insert data either into mongo or an array of staic objects.

    res.end({ });

  }

}
