
export class ServiceRepository {

  constructor({Mongo, AstroClass, ROOT_URL}) {

    this.model = this.modelFactory(Mongo, AstroClass);
    this.ROOT_URL = ROOT_URL;

    try {

      const service = new this.model();
      service._id = ROOT_URL;
      service.save();

    } catch(e) {

      // duplicate keys

    }

  }

  modelFactory(Mongo, AstroClass) {

    return AstroClass.create({
      name: 'Services',
      collection: new Mongo.Collection('services'),
      fields: {

        /**
         * This is the root_url connection.
         * @type {[type]}
         */
        _id: String,

        /**
         * An object which contains the endpoints on a service.
         * @type {Object}
         */
        endpoints: {
          type:     Object,
          optional: true,
          default: {},
        },

        lastAccess: {
          type:     Date,
          optional: true,
        }
      },
    });

  }

  services() {

    return this.model.find();

  }

  registerEndpoint({ Crud, type, name, handler}) {

    const service = this.model.findOne(this.ROOT_URL);

    service.endpoints[name] = {
      type,
    };

    service.save();

    Crud[type](name, (req, res) => {

      service.lastAccess = new Date();
      service.save();

      handler(req, res);

    });

  }

  // find a service that fufills the call.
  networkCall(name, type, args) {

    const index = `endpoints.${name}.type`;

    const service = this.model.find({
      [index]: type,
    },
    {
      sort: {
        lastAccess: 1,
      },
      limit: 1,
    }
    ).fetch();

    console.log(service);

  }

}
