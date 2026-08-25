import { DeviceLocale } from 'src/device-locale/entities/device-locale.entity';

export class CreateConnectionConfigDto {
  name!: string;
  deviceLocale!: DeviceLocale;
}
