
/**
 * Make the MathAdditionService a singleton
 */
let instance = null;

export class MathAdditionService {

  constructor(Crud, ServiceRepository) {

    if (!instance) {

      instance = this;

      ServiceRepository.registerEndpoint({
        Crud,
        type: 'read',
        name: 'addNumbers',
        handler: MathAdditionService.endpoint,
      });

    }

    return instance;

  }

  static checkAddtionArguments(args) {

    const { values, ...extraArgs } = args;

    if (Object.keys(extraArgs).length)
      throw new Error(`Unexpected arguments, I dont trust you!`);

    if (!Array.isArray(values))
      throw new Error(`values arguments should be an array`);

  }

  static addNumbers(numbers) {

    if (!Array.isArray(numbers))
      throw new Error(`numbers must be an array`);

    return numbers.reduce((p, c) => p += c, 0);

  }

  static endpoint(req, res) {

    MathAdditionService.checkAddtionArguments(req.args);

    res.end(MathAdditionService.addNumbers(req.args.values));

  }

}
