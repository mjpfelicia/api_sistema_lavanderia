import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Endereco } from './entities/endereco.entity';
import { Op } from 'sequelize';

@Injectable()
export class ClienteService {
  constructor(
    @InjectModel(Cliente)
    private readonly clienteEntity: typeof Cliente,
    @InjectModel(Endereco)
    private readonly enderecoEntity: typeof Endereco,
  ) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const cliente = await this.clienteEntity.create(createClienteDto);
    const enderecoDto = createClienteDto.endereco;

    enderecoDto.clienteId = cliente.id;

    const endereco = await this.enderecoEntity.create(enderecoDto);

    cliente.endereco = endereco;

    return cliente;
  }

  findOne(id: number) {
    return this.clienteEntity.findOne({ where: { id }, include: [Endereco] });
  }

  findByCellphoneOrName(telefone: string, nome: string): Promise<Cliente[]> {
    return this.clienteEntity.findAll({
      where: {
        [Op.or]: {
          telefone: {
            [Op.like]: `%${telefone}%`,
          },
          nome: {
            [Op.like]: `%${nome}%`,
          },
        },
      },
      include: [Endereco],
    });
  }

  async update(id: number, updateClienteDto: UpdateClienteDto): Promise<void> {
    await this.enderecoEntity.update(updateClienteDto.endereco, {
      where: {
        clienteId: id,
      },
    });

    this.clienteEntity.update(updateClienteDto, { where: { id } });
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
