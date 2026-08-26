import { ConnectionConfig } from 'src/connection-configs/entities/connection-config.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DeviceLocaleHistory {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column('timestamptz')
  date!: Date;

  connectionConfigs!: ConnectionConfig;
}
