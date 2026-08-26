import { DeviceLocale } from 'src/device-locale/entities/device-locale.entity';
import {
  Column,
  Entity,
  // JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ConnectionConfigs } from '../connection-configs.interface';

@Entity()
export class ConnectionConfigsEntity implements ConnectionConfigs {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @OneToOne(
    () => DeviceLocale,
    (deviceLocale) => deviceLocale.connectionConfigs,
  )
  deviceLocale!: DeviceLocale;
}
