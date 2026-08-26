import type { ConnectionConfigs } from 'src/connection-configs/connection-configs.interface';
// import { ConnectionConfigsEntity } from 'src/connection-configs/entities/connection-config.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DeviceLocaleHistory {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column('timestamptz')
  date!: Date;

  @Column('simple-json')
  connectionConfigs!: ConnectionConfigs;
}
