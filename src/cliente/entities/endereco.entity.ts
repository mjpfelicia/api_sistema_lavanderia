import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Cliente } from './cliente.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
@Table
export class Endereco extends Model<Endereco> {
  @Column
  endereco: string;

  @Column
  numero: string;

  @Column
  complemento: string;

  @Column
  estado: string;

  @Column
  cep: string;

  @Column
  bairro: string;

  @ForeignKey(() => Cliente)
  @Column
  clienteId: number;

  @BelongsTo(() => Cliente)
  cliente: Cliente;
}
