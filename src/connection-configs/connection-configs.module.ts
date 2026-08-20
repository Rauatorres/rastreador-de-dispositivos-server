import { Module } from '@nestjs/common';
import { ConnectionConfigsService } from './connection-configs.service';
import { ConnectionConfigsController } from './connection-configs.controller';
import { DatabaseModule } from 'src/database/database.module';
import { connectionConfigProviders } from './entities/connection-config.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ConnectionConfigsController],
  providers: [ConnectionConfigsService, ...connectionConfigProviders],
  exports: [ConnectionConfigsService],
})
export class ConnectionConfigsModule {}
