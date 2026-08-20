import { Inject, Injectable } from '@nestjs/common';
import { UpdateDeviceLocaleDto } from './dto/update-device-locale.dto';
import { Repository } from 'typeorm';
import { DeviceLocale } from './entities/device-locale.entity';

@Injectable()
export class DeviceLocaleService {
  constructor(
    @Inject('DEVICE_LOCALE_REPOSITORY')
    private deviceLocaleRepository: Repository<DeviceLocale>,
  ) {}

  // findAll() {
  //   return `This action returns all deviceLocale`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} deviceLocale`;
  // }

  // async findOneByConnectionConfigsId(id: string){
  //   const connectionConfigs = this.connectionConfigsService.findOneById(id)

  // }

  update(id: string, updateDeviceLocaleDto: UpdateDeviceLocaleDto) {
    return this.deviceLocaleRepository.update(id, updateDeviceLocaleDto);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} deviceLocale`;
  // }
}
