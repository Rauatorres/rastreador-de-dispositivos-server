import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        url: process.env.DB_URL,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'postgres',
        // database: 'rastreador-de-dispositivos',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
