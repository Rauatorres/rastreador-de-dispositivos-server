import { PartialType } from '@nestjs/mapped-types';
import { CreateDeviceLocaleDto } from './create-device-locale.dto';

export class UpdateDeviceLocaleDto extends PartialType(CreateDeviceLocaleDto) {}
