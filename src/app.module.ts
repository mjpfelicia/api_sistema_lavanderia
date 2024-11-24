import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { DeliveryModule } from './delivery/delivery.module';
import { PecaModule } from './peca/peca.module';
import { TicketModule } from './ticket/ticket.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    ClienteModule,
    DeliveryModule,
    PecaModule,
    TicketModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
