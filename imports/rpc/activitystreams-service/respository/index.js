import {
  ActivityFactory,
  ASObjectFactory,
  PageElementFactory,
  PersonFactory,
} from './models';

export class ActivityStreamRepository {

  constructor(ORM, Mongo) {

    this.ORM = ORM;

    if (!process.env.UNIT_TESTING) {

      const ASObj = ASObjectFactory(ORM);
      ActivityFactory(ORM, Mongo, ASObj);

      PageElementFactory(ORM);
      PersonFactory(ORM);

    }


  }

  find(args) {

    return this.ORM.find(args);

  }

  get(id) {

    return this.ORM.findOne(id)

  }

  getAll() {

    return this.ORM.find();

  }

  add(obj) {

    // error but what needs to happen here is
    // we create a new object and merge the object they have sned into it.
    //
    // let o = new this.ORM();
    // o = { ...o, ...obj };
    // o.save();

  }

  update(obj) {

    return obj.save();

  }

  remove(id) {

    return this.ORM.findOne(id).remove();

  }

}
