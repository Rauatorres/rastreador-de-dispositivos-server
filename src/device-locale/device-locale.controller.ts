import {
  Controller,
  // Get,
  // Post,
  Body,
  Patch,
  Param,
  // Delete,
} from '@nestjs/common';
import { DeviceLocaleService } from './device-locale.service';
// import { CreateDeviceLocaleDto } from './dto/create-device-locale.dto';
import { UpdateDeviceLocaleDto } from './dto/update-device-locale.dto';

@Controller('device-locale')
export class DeviceLocaleController {
  constructor(private readonly deviceLocaleService: DeviceLocaleService) {}

  // @Post()
  // create(@Body() createDeviceLocaleDto: CreateDeviceLocaleDto) {
  //   return this.deviceLocaleService.create(createDeviceLocaleDto);
  // }

  // @Get()
  // findAll() {
  //   return this.deviceLocaleService.findAll();
  // }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDeviceLocaleDto: UpdateDeviceLocaleDto,
  ) {
    return this.deviceLocaleService.update(id, updateDeviceLocaleDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.deviceLocaleService.remove(+id);
  // }
}
