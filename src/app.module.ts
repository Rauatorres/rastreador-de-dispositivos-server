import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ConnectionConfigsModule } from './connection-configs/connection-configs.module';
import { DeviceLocaleModule } from './device-locale/device-locale.module';
import { DeviceLocaleHistoryModule } from './device-locale-history/device-locale-history.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ConnectionConfigsModule,
    DeviceLocaleModule,
    DeviceLocaleHistoryModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
