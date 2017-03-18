import { ServiceRepository } from './service';
import { MathAdditionService } from './example-services/maths-addition-service';
import { MathTakeawayService } from './example-services/maths-takeaway-service';
import { MathTimesService } from './example-services/maths-times-service';
import { PingService } from './ping';
import { Crud } from './crud';

new PingService(Crud, ServiceRepository);
new MathAdditionService(Crud, ServiceRepository);
new MathTakeawayService(Crud, ServiceRepository);
