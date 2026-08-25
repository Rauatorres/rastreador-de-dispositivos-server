import { DeviceLocale } from 'src/device-locale/entities/device-locale.entity';
import {
  Column,
  Entity,
  // JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ConnectionConfig {
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
