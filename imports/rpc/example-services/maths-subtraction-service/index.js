let instance = null;

export class MathSubtractionService {

  constructor(Crud, ServiceRepository) {

    if (!instance) {

      instance = this;

      ServiceRepository.registerEndpoint({
        Crud,
        type: 'read',
        name: 'subtractionNumbers',
        handler: MathSubtractionService.endpoint,
      });

    }

    return instance;

  }

  static checkSubtractionArguments(args) {

    const { values, ...extraArgs } = args;

    if (Object.keys(extraArgs).length)
      throw new Error(`Unexpected arguments, I dont trust you!`);

    if (!Array.isArray(values))
      throw new Error(`Values argument must be an array not ${typeof values}`);

  }

  static subtraction(numbers) {

    if (!Array.isArray(numbers))
      throw new Error(`Arguments must be an array not ${typeof numbers}`);

    return numbers.reduce((p, c) => p -= c, 0);

  }

  static endpoint(req, res) {

    MathSubtractionService.checkSubtractionArguments(req.args)

    res.end(MathSubtractionService.subtraction(req.args.values));

  }


}
