import { Crud } from '../core';
import { PingRPC, PingHandler } from './ping';

/**
 * Inject the CRUD and PingHandler as dependencies.
 */
PingRPC(Crud, PingHandler);
