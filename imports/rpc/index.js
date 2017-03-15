import { CRUD } from 'meteor/centiq:crud';
import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';
import { CrudFactory, Service } from '../core';
import { PingRPC, PingHandler } from './ping';


/// PLay
const ServiceModel = Service.ModelFactory(Mongo, Class);

Service.register(ServiceModel);

const services = Service.GetServices(ServiceModel).fetch();

// play


/**
 * Inject the CRUD and PingHandler as dependencies.
 */
PingRPC(CrudFactory(CRUD), PingHandler);
