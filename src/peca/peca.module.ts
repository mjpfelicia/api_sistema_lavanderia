import { Module } from '@nestjs/common';
import { PecaService } from './peca.service';
import { PecaController } from './peca.controller';

@Module({
  controllers: [PecaController],
  providers: [PecaService],
})
export class PecaModule {}
