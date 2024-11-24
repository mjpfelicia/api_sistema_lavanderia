import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Endereco } from 'src/cliente/entities/endereco.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: `./database.sqlite`,
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Cliente, Endereco]),
  ],
})
export class DatabaseModule {}
