import { CRUD } from 'meteor/centiq:crud';
import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';
import { CrudFactory, ServiceRepository } from '../core';
import { PingService } from './ping';

/**
 * Get the CRUD interface.
 * @type {[type]}
 */
const Crud = CrudFactory(CRUD);

/**
 * [ServiceModel description]
 * @type {[type]}
 */
const ServiceModel = ServiceRepository.ModelFactory(Mongo, Class);

/**
 * Resigster the service...
 */
ServiceRepository.register(ServiceModel);

/**
 * Create a new instance of the ping service.
 */
new PingService(Crud, ServiceModel);
