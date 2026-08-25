import { Inject, Injectable } from '@nestjs/common';
import { UpdateDeviceLocaleDto } from './dto/update-device-locale.dto';
import { Repository } from 'typeorm';
import { DeviceLocale } from './entities/device-locale.entity';
import { ConnectionConfigsService } from 'src/connection-configs/connection-configs.service';

@Injectable()
export class DeviceLocaleService {
  constructor(
    @Inject('DEVICE_LOCALE_REPOSITORY')
    private deviceLocaleRepository: Repository<DeviceLocale>,
    private connectionConfigsService: ConnectionConfigsService,
  ) {}

  async update(
    connectionConfigsId: string,
    updateDeviceLocaleDto: UpdateDeviceLocaleDto,
  ) {
    const connectionConfigs =
      await this.connectionConfigsService.findOneById(connectionConfigsId);

    if (!connectionConfigs)
      throw Error(`no connection with id ${connectionConfigsId} was found`);

    const res = await this.deviceLocaleRepository.update(
      connectionConfigs.deviceLocale.id,
      updateDeviceLocaleDto,
    );

    if (res.affected == 0) throw Error(`incorrect device locale`);

    return res;
  }
}
