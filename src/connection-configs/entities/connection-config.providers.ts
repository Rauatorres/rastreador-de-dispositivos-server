import { DataSource } from 'typeorm';
import { ConnectionConfigsEntity } from './connection-config.entity';

export const connectionConfigProviders = [
  {
    provide: 'CONNECTION_CONFIG_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ConnectionConfigsEntity),
    inject: ['DATA_SOURCE'],
  },
];
