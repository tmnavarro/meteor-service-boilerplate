import { ServiceRepository } from './service';
import { PingService } from './ping';
import { Crud } from './crud';

new PingService(Crud, ServiceRepository);
