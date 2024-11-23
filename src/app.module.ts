import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { DeliveryModule } from './delivery/delivery.module';
import { PecaModule } from './peca/peca.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [ClienteModule, DeliveryModule, PecaModule, TicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
