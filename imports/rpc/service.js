import { Mongo } from 'meteor/mongo';
import { Class as AstroClass } from 'meteor/jagi:astronomy';
import { ServiceRepository as SR } from '../core';

export const ServiceRepository = new SR({
  Mongo,
  AstroClass,
  ROOT_URL: process.env.ROOT_URL
});
