import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entite';
import { Repository } from 'typeorm';
import { properyDto } from './dto/propery.dto';

@Injectable()
export class ProperyService {
  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
  ) {}
  async created(data: properyDto) {
    return await this.propertyRepo.save(data);
  }

  async findAll() {
    return await this.propertyRepo.find();
  }

  async findOne(id: number) {
    const user = await this.propertyRepo.findOne({ where: { id } });
    if (!user) throw new BadRequestException('user not found');
    return user;
  }

  async updateUser(id: number, data: properyDto) {
    const user = await this.propertyRepo.findOne({ where: { id } });
    if (!user) throw new BadRequestException('user not found');
    await this.propertyRepo.update(id, data);
    return await this.propertyRepo.findOne({ where: { id } });
  }

  async deleteUser(id: number) {
    const user = await this.propertyRepo.findOne({ where: { id } });
    if (!user) throw new BadRequestException('User not found');
    await this.propertyRepo.delete(id);
    return { messgae: 'succesful' };
  }
}
