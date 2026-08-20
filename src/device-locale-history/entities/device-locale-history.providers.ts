import { DataSource } from 'typeorm';
import { DeviceLocaleHistory } from './device-locale-history.entity';

export const deviceLocaleHistoryProviders = [
  {
    provide: 'DEVICE_LOCALE_HISTORY_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(DeviceLocaleHistory),
    inject: ['DATA_SOURCE'],
  },
];
