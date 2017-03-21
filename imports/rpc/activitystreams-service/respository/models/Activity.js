import { ASCollectionFactory } from './collection';

export function ActivityFactory(AstroClass, Mongo, ASObject) {

  return AstroClass.create({
    name:      'AS.Activity',
    typeField: 'objectTypes',
    collection: ASCollectionFactory(Mongo),
    fields: {
      actor: ASObject,
      object: ASObject,
      verb: String,
      published: {
        type: Date,
        immutable: true,
        default: () => new Date(),
      }
    }
  })

}
