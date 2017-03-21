export function ASCollectionFactory(Mongo) {

  return new Mongo.Collection('as.activities');

}
