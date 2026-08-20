import { DataSource } from 'typeorm';
import { ConnectionConfig } from './connection-config.entity';

export const connectionConfigProviders = [
  {
    provide: 'CONNECTION_CONFIG_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ConnectionConfig),
    inject: ['DATA_SOURCE'],
  },
];
