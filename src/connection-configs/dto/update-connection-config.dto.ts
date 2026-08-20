import { PartialType } from '@nestjs/mapped-types';
import { CreateConnectionConfigDto } from './create-connection-config.dto';

export class UpdateConnectionConfigDto extends PartialType(CreateConnectionConfigDto) {}
