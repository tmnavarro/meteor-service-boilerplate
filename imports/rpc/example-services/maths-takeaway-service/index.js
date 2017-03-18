let instance = null;

export class MathTakeawayService {

  constructor(Crud, ServiceRepository) {

    if (!instance) {

      instance = this;

      ServiceRepository.registerEndpoint({
        Crud,
        type: 'read',
        name: 'takeawayNumbers',
        handler: MathTakeawayService.endpoint,
      });

    }

    return instance;

  }

  static checkTakeawayArguments(args) {

    const { values, ...extraArgs } = args;

    if (Object.keys(extraArgs).length)
      throw new Error(`Unexpected arguments, I dont trust you!`);

    if (!Array.isArray(values))
      throw new Error(`Values argument must be an array not ${typeof values}`);

  }

  static takeaway(numbers) {

    if (!Array.isArray(numbers))
      throw new Error(`Arguments must be an array not ${typeof numbers}`);

    return numbers.reduce((p, c) => p -= c, 0);

  }

  static endpoint(req, res) {

    MathTakeawayService.checkTakeawayArguments(req.args)

    res.end(MathTakeawayService.takeaway(req.args.values));

  }


}
