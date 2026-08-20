import { Module } from '@nestjs/common';
import { DeviceLocaleHistoryService } from './device-locale-history.service';
import { DeviceLocaleHistoryController } from './device-locale-history.controller';
import { DatabaseModule } from 'src/database/database.module';
import { deviceLocaleHistoryProviders } from './entities/device-locale-history.providers';
import { ConnectionConfigsModule } from 'src/connection-configs/connection-configs.module';

@Module({
  imports: [DatabaseModule, ConnectionConfigsModule],
  controllers: [DeviceLocaleHistoryController],
  providers: [DeviceLocaleHistoryService, ...deviceLocaleHistoryProviders],
})
export class DeviceLocaleHistoryModule {}
