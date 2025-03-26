import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  UsePipes,
  ValidationPipe,
  Param,
} from '@nestjs/common';
import { ProperyService } from './propery.service';
import { properyDto } from './dto/propery.dto';

@Controller()
export class ProperyController {
  constructor(private properyService: ProperyService) {}
  @Post('user')
  @UsePipes(ValidationPipe)
  async created(@Body() body: properyDto) {
    return this.properyService.created(body);
  }
  @Get('users')
  async findAll() {
    return this.properyService.findAll();
  }
  @Get('user/:id')
  async findOne(@Param('id') id: number) {
    return this.properyService.findOne(id);
  }
  @Put('user/:id')
  async updateUser(@Param('id') id: number, @Body() body: properyDto) {
    return this.properyService.updateUser(id, body);
  }
  @Delete('user/:id')
  async deleteUser(@Param('id') id: number) {
    return this.properyService.deleteUser(id);
  }
}
