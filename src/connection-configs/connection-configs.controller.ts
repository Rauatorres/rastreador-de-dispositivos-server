import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ConnectionConfigsService } from './connection-configs.service';
import { CreateConnectionConfigDto } from './dto/create-connection-config.dto';
import { UpdateConnectionConfigDto } from './dto/update-connection-config.dto';

@Controller('connection-configs')
export class ConnectionConfigsController {
  constructor(
    private readonly connectionConfigsService: ConnectionConfigsService,
  ) {}

  @Post()
  connect(@Body() createConnectionConfigDto: CreateConnectionConfigDto) {
    return this.connectionConfigsService.create(createConnectionConfigDto);
  }

  @Get()
  findAll() {
    return this.connectionConfigsService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.connectionConfigsService.findOneById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConnectionConfigDto: UpdateConnectionConfigDto,
  ) {
    return this.connectionConfigsService.update(id, updateConnectionConfigDto);
  }

  @Delete(':id')
  disconnect(@Param('id') id: string) {
    return this.connectionConfigsService.remove(id);
  }
}
