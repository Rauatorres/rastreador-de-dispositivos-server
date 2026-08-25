import {
  Controller,
  // Get,
  // Post,
  Body,
  Patch,
  Param,
  Get,
  // Delete,
} from '@nestjs/common';
import { DeviceLocaleService } from './device-locale.service';
// import { CreateDeviceLocaleDto } from './dto/create-device-locale.dto';
import { UpdateDeviceLocaleDto } from './dto/update-device-locale.dto';

@Controller('device-locale')
export class DeviceLocaleController {
  constructor(private readonly deviceLocaleService: DeviceLocaleService) {}

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.deviceLocaleService.findOneById(id);
  }

  @Get()
  findAll() {
    return this.deviceLocaleService.findAll();
  }

  @Patch(':connectionConfigsId')
  update(
    @Param('connectionConfigsId') connectionConfigsId: string,
    @Body() updateDeviceLocaleDto: UpdateDeviceLocaleDto,
  ) {
    return this.deviceLocaleService.update(
      connectionConfigsId,
      updateDeviceLocaleDto,
    );
  }
}
