
let instance = null;

export class MathTimesService {

  constructor(Crud, ServiceRepository) {

    if (!instance) {

      instance = this;

      ServiceRepository.registerEndpoint({
        Crud,
        type: 'read',
        name: 'timesNumbers',
        handler: MathTimesService.endpoint,
      });

    }

    return instance;

  }

  static checkTimesArguments(args) {

    const { values, ...extraArgs } = args;

    if (Object.keys(extraArgs).length)
      throw new Error(`Passing unexpected arguments, I dont trust you!`);

    if (!Array.isArray(values))
      throw new Error(`values argument must be an array not ${typeof values}`);

  }

  static timesNumbers(numbers) {

    if (!Array.isArray(numbers))
      throw new Error(`Expected array got ${typeof numbers}`);

    let sum = 0
    for (var i = 0; i < numbers.length; i++) {
      sum = (sum || 1) * numbers[i];
    }

    return sum;

  }

  static endpoint(req, res) {

    MathTimesService.checkTimesArguments(req.args);

    res.end(MathTimesService.timesNumbers(req.args.values));

  }

}
