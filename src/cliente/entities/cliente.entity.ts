import { Column, Model, Table, HasOne } from 'sequelize-typescript';
import { Endereco } from './endereco.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
@Table
export class Cliente extends Model<Cliente> {
  @Column
  nome: string;

  @Column
  email: string;

  @Column
  telefone: string;

  @HasOne(() => Endereco)
  endereco: Endereco;
}
