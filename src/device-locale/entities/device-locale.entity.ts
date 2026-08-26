import { ConnectionConfigsEntity } from 'src/connection-configs/entities/connection-config.entity';
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

  @Column({ type: 'float', default: 0 })
  lat!: number;

  @Column({ type: 'float', default: 0 })
  lng!: number;

  @OneToOne(() => ConnectionConfigsEntity, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  connectionConfigs!: ConnectionConfigsEntity;
}
