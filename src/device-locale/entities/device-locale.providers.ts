import { DataSource } from 'typeorm';
import { DeviceLocale } from './device-locale.entity';

export const deviceLocaleProviders = [
  {
    provide: 'DEVICE_LOCALE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(DeviceLocale),
    inject: ['DATA_SOURCE'],
  },
];
