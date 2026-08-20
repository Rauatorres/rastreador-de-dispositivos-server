import { Inject, Injectable } from '@nestjs/common';
import { CreateConnectionConfigDto } from './dto/create-connection-config.dto';
import { UpdateConnectionConfigDto } from './dto/update-connection-config.dto';
import { Repository } from 'typeorm';
import { ConnectionConfig } from './entities/connection-config.entity';

@Injectable()
export class ConnectionConfigsService {
  constructor(
    @Inject('CONNECTION_CONFIG_REPOSITORY')
    private connectionConfigRepository: Repository<ConnectionConfig>,
  ) {}

  async create(createConnectionConfigDto: CreateConnectionConfigDto) {
    if (!createConnectionConfigDto.name)
      throw Error('conenction name is missing');

    const newConnection = this.connectionConfigRepository.create({
      ...createConnectionConfigDto,
      deviceLocale: {},
    });
    const savedConnection =
      await this.connectionConfigRepository.save(newConnection);

    return savedConnection;
  }

  async findAll() {
    return await this.connectionConfigRepository.find({
      relations: {
        deviceLocale: true,
      },
    });
  }

  async findOneById(id: string) {
    const res = await this.connectionConfigRepository.findOne({
      where: { id },
      relations: { deviceLocale: true },
    });
    if (!res) throw Error(`no user was found with id ${id}`);
    return res;
  }

  async update(
    id: number,
    updateConnectionConfigDto: UpdateConnectionConfigDto,
  ) {
    return await this.connectionConfigRepository.update(
      id,
      updateConnectionConfigDto,
    );
  }

  async remove(id: number) {
    const res = await this.connectionConfigRepository.delete(id);
    if (res.affected == 0) throw Error(`no connection with id ${id} was found`);
    return res;
  }
}
