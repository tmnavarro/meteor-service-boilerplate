
export class ServiceRepository {

  static GetServices(ServiceModel) {

    return ServiceModel.find();

  }

  static ModelFactory(Mongo, Class) {

    return Class.create({
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

  static register(ServiceModel, { ROOT_URL }) {


    try {

      const service = new ServiceModel();
      service._id = ROOT_URL;
      service.save();

    } catch(e) {
      // duplicate keys
    }

  }

  static registerEndpoint({ Crud, type, name, handler, ROOT_URL, ServiceModel}) {

    const service = ServiceModel.findOne(ROOT_URL);

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
  static networkCall(ServiceModel, name, type, args) {

    const index = `endpoints.${name}.type`;

    const service = ServiceModel.find({
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
