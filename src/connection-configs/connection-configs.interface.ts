import { DeviceLocale } from 'src/device-locale/entities/device-locale.entity';

export interface ConnectionConfigs {
  id: string;
  name: string;
  deviceLocale: DeviceLocale;
}
