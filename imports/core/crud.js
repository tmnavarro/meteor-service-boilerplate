import { CRUD } from 'meteor/centiq:crud';

/**
 * Create instance of the crud class.
 */
export const Crud = new CRUD();

/**
 * Add interfaces for the CRUD class.
 */
Crud.addInterface(new CRUD.Interfaces.Publication());
Crud.addInterface(new CRUD.Interfaces.Method());
Crud.addInterface(new CRUD.Interfaces.HTTP());
