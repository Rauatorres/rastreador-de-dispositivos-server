import { ConnectionConfig } from 'src/connection-configs/entities/connection-config.entity';

export class CreateDeviceLocaleDto {
  lat!: number;
  lng!: number;
  connectionConfigs?: ConnectionConfig;
}
