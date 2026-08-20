import { Module } from '@nestjs/common';
import { DeviceLocaleService } from './device-locale.service';
import { DeviceLocaleController } from './device-locale.controller';
import { DatabaseModule } from 'src/database/database.module';
import { deviceLocaleProviders } from './entities/device-locale.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [DeviceLocaleController],
  providers: [DeviceLocaleService, ...deviceLocaleProviders],
})
export class DeviceLocaleModule {}
