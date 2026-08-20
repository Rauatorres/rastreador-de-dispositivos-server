import { PartialType } from '@nestjs/mapped-types';
import { CreateDeviceLocaleHistoryDto } from './create-device-locale-history.dto';

export class UpdateDeviceLocaleHistoryDto extends PartialType(CreateDeviceLocaleHistoryDto) {}
