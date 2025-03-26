import { Module } from '@nestjs/common';
import { ProperyController } from './propery.controller';
import { ProperyService } from './propery.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entite';

@Module({
  controllers: [ProperyController],
  providers: [ProperyService],
  exports: [],
  imports: [TypeOrmModule.forFeature([Property])],
})
export class ProperyModule {}
