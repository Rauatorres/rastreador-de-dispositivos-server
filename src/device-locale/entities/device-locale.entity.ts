import { ConnectionConfig } from 'src/connection-configs/entities/connection-config.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class DeviceLocale {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ default: 0 })
  latitude!: number;

  @Column({ default: 0 })
  longitude!: number;

  @OneToOne(() => ConnectionConfig)
  @JoinColumn()
  connectionConfigs!: ConnectionConfig;
}
