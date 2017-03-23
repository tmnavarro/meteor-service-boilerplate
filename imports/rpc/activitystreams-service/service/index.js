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

  }

}
