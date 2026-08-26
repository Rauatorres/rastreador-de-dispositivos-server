import { Inject, Injectable } from '@nestjs/common';
import { CreateDeviceLocaleHistoryDto } from './dto/create-device-locale-history.dto';
import { ConnectionConfigsService } from 'src/connection-configs/connection-configs.service';
import { LessThan, Repository } from 'typeorm';
import { DeviceLocaleHistory } from './entities/device-locale-history.entity';
import pastOneMonthCalc from 'src/utils/past-one-month-calc/past-one-month-calc.utils';
import { Cron, Interval } from '@nestjs/schedule';

@Injectable()
export class DeviceLocaleHistoryService {
  constructor(
    private connectionConfigsService: ConnectionConfigsService,
    @Inject('DEVICE_LOCALE_HISTORY_REPOSITORY')
    private deviceLoacaleHistoryRepository: Repository<DeviceLocaleHistory>,
  ) {}

  @Cron('00 00 00 * * *')
  async clearHistory() {
    await this.deviceLoacaleHistoryRepository.delete({
      date: LessThan(pastOneMonthCalc()),
    });
    console.log(
      `all device locale registers before ${pastOneMonthCalc().toString()} were deleted`,
    );
  }

  // @Interval(1000)
  // logger() {
  //   console.log('testando interval');
  // }

  @Interval(1000)
  async saveDevicesLocaleInHistory() {
    const connectionConfigs = await this.connectionConfigsService.findAll();
    for (const connectionConfig of connectionConfigs) {
      const newDeviceLocaleHistoryRegister = await this.create({
        connectionConfigsId: connectionConfig.id,
      });
      console.log(newDeviceLocaleHistoryRegister);
      // await this.create({
      //   connectionConfigsId: connectionConfig.id,
      // });
    }
  }

  private async create(
    createDeviceLocaleHistoryDto: CreateDeviceLocaleHistoryDto,
  ) {
    if (!createDeviceLocaleHistoryDto.connectionConfigsId)
      throw Error(
        `invalid connection configs id ${createDeviceLocaleHistoryDto.connectionConfigsId}`,
      );

    const connectionConfigs = await this.connectionConfigsService.findOneById(
      createDeviceLocaleHistoryDto.connectionConfigsId,
    );

    if (!connectionConfigs) throw new Error('connection configs not found');

    // return 'This action adds a new deviceLocaleHistory';
    return await this.deviceLoacaleHistoryRepository.insert({
      connectionConfigs,
      date: new Date(),
    });
  }

  async findAll() {
    // const localeHistoryRegisters =
    //   await this.deviceLoacaleHistoryRepository.find({
    //     relations: {
    //       connectionConfigs: true,
    //     },
    //   });

    return await this.deviceLoacaleHistoryRepository.find({
      relations: {
        connectionConfigs: true,
      },
      order: {
        date: 'ASC',
      },
    });
  }

  // async getDateObject(historyId: string) {
  //   const history = await this.deviceLoacaleHistoryRepository.findOneBy({
  //     id: historyId,
  //   });
  //   return history?.date.getDate();
  // }

  async findOne(id: string) {
    const res = await this.deviceLoacaleHistoryRepository.findOne({
      where: { id },
      relations: {
        connectionConfigs: true,
      },
    });
    if (!res) throw Error(`no device locale history was found with id ${id}`);
    return res;
  }

  // async update(
  //   id: string,
  //   updateDeviceLocaleHistoryDto: UpdateDeviceLocaleHistoryDto,
  // ) {
  //   const res = await this.deviceLoacaleHistoryRepository.update(
  //     id,
  //     updateDeviceLocaleHistoryDto,
  //   );
  //   if (res.affected == 0) throw Error(`no connection with id ${id} was found`);
  //   return res;
  // }

  // remove(id: string) {
  //   return `This action removes a #${id} deviceLocaleHistory`;
  // }

  async remove(id: string) {
    const res = await this.deviceLoacaleHistoryRepository.delete(id);
    if (res.affected == 0)
      throw Error(`no device locale history register with id ${id} was found`);
    return res;
  }
}
