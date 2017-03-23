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

  static checkReadArguments(args) {

    const { objectType, verb, ...extraArgs } = args;

    if (Object.keys(extraArgs).length)
      throw new Error(`Passed unexpected argument, I dont trust you!`);

    if (typeof objectType !== 'string')
      throw new Error(`objectType must be a string not ${typeof args.objectType}`);

    if (typeof verb !== 'string')
      throw new Error(`verb must be a string not ${typeof args.verb}`);

  }

  readEndpoint(req, res) {

    // then as an integration test we would run all of this
    // under a real database.

    // this means we can unit test this
    const args = this.parseReadArguments(req.args);

    // we would check that this find got the arguments expected
    const activities = this.ActivityStreamRepository.find(args);

    // and this would allow us to unit test this function.
    res.end(this.doSomthingWithActivities(activities));

  }

  static checkCreateArguments(args) {

    const { objectType, actor, verb, ...extraArgs } = args;

    if (Object.keys(extraArgs).length)
      throw new Error('Passed unexpected argument, I dont trust you!')

    if (typeof objectType !== 'string')
      throw new Error(`objectType must be a string not ${typeof objectType}`)

    if (typeof actor !== 'string')
      throw new Error(`actor must be a string not ${typeof actor}`)

    if (typeof verb !== 'string')
      throw new Error(`actor must be a string not ${typeof verb}`)

  }

  createEndpoint(req, res) {

    // mock the get method to set method.

    // here I should be able to call find and insert data either into mongo or an array of staic objects.

    res.end({ });

  }

}
