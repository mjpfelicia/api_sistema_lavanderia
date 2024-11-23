import { Injectable } from '@nestjs/common';
import { CreatePecaDto } from './dto/create-peca.dto';
import { UpdatePecaDto } from './dto/update-peca.dto';

@Injectable()
export class PecaService {
  create(createPecaDto: CreatePecaDto) {
    return 'This action adds a new peca';
  }

  findAll() {
    return `This action returns all peca`;
  }

  findOne(id: number) {
    return `This action returns a #${id} peca`;
  }

  update(id: number, updatePecaDto: UpdatePecaDto) {
    return `This action updates a #${id} peca`;
  }

  remove(id: number) {
    return `This action removes a #${id} peca`;
  }
}
