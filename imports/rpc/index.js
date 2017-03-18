import { CRUD } from 'meteor/centiq:crud';
import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';
import { CrudFactory, ServiceRepository } from '../core';
import { PingService } from './ping';

const Crud = CrudFactory(CRUD);

const ServiceModel = ServiceRepository.ModelFactory(Mongo, Class);

ServiceRepository.register(ServiceModel, {
  ROOT_URL: process.env.ROOT_URL,
});

new PingService(Crud, {
  ServiceModel,
  ServiceRepository
}, process.env.ROOT_URL);
