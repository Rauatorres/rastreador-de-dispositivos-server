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

  update(id: string, updateDeviceLocaleDto: UpdateDeviceLocaleDto) {
    return this.deviceLocaleRepository.update(id, updateDeviceLocaleDto);
  }
}
