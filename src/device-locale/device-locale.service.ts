import { Inject, Injectable } from '@nestjs/common';
import { UpdateDeviceLocaleDto } from './dto/update-device-locale.dto';
import { Repository } from 'typeorm';
import { DeviceLocale } from './entities/device-locale.entity';
import { CreateDeviceLocaleDto } from './dto/create-device-locale.dto';

@Injectable()
export class DeviceLocaleService {
  constructor(
    @Inject('DEVICE_LOCALE_REPOSITORY')
    private deviceLocaleRepository: Repository<DeviceLocale>,
  ) {}

  async findOneById(id: string) {
    return await this.deviceLocaleRepository.findOneBy({ id });
  }

  async findAll() {
    return await this.deviceLocaleRepository.find();
  }

  async create(createDeviceLocaleDto: CreateDeviceLocaleDto) {
    const newDeviceLocale = this.deviceLocaleRepository.create(
      createDeviceLocaleDto,
    );
    return await this.deviceLocaleRepository.save(newDeviceLocale);
  }

  async update(id: string, updateDeviceLocaleDto: UpdateDeviceLocaleDto) {
    const res = await this.deviceLocaleRepository.update(
      id,
      updateDeviceLocaleDto,
    );

    console.log(res);

    if (res.affected == 0) throw Error(`incorrect device locale`);

    return res;
  }
}
