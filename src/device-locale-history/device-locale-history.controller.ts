import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DeviceLocaleHistoryService } from './device-locale-history.service';
import { CreateDeviceLocaleHistoryDto } from './dto/create-device-locale-history.dto';
// import { UpdateDeviceLocaleHistoryDto } from './dto/update-device-locale-history.dto';

@Controller('device-locale-history')
export class DeviceLocaleHistoryController {
  constructor(
    private readonly deviceLocaleHistoryService: DeviceLocaleHistoryService,
  ) {}

  @Post()
  create(@Body() createDeviceLocaleHistoryDto: CreateDeviceLocaleHistoryDto) {
    return this.deviceLocaleHistoryService.create(createDeviceLocaleHistoryDto);
  }

  @Get()
  findAll() {
    return this.deviceLocaleHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deviceLocaleHistoryService.findOne(id);
  }

  // @Get('date/:historyId')
  // async getDate(@Param('historyId') historyId: string) {
  //   return this.deviceLocaleHistoryService.getDateObject(historyId);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateDeviceLocaleHistoryDto: UpdateDeviceLocaleHistoryDto,
  // ) {
  //   return this.deviceLocaleHistoryService.update(
  //     +id,
  //     updateDeviceLocaleHistoryDto,
  //   );
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deviceLocaleHistoryService.remove(id);
  }
}
