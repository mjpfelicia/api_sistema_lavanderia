import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cliente } from './entities/cliente.entity';
import { Endereco } from './entities/endereco.entity';

@Module({
  imports: [SequelizeModule.forFeature([Cliente, Endereco])],
  providers: [ClienteService],
  controllers: [ClienteController],
  exports: [SequelizeModule, ClienteService],
})
export class ClienteModule {}
