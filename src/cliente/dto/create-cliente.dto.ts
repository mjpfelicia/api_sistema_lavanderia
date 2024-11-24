import { Endereco } from '../entities/endereco.entity';

export class CreateClienteDto {
  nome: string;
  email: string;
  telefone: string;
  endereco: Endereco;
}
