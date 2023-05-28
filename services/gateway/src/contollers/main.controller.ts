import { Controller, Get } from '@nestjs/common';

import { QueriesService } from '../services';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Controller()
export class MainController {
  constructor(
    private readonly queriesService: QueriesService,
    @InjectConnection() private readonly connection: Connection
  ) {}

  @Get()
  async ping() {
    console.log(await this.connection.db.command({ ping: 1 }));
    return this.queriesService.execute();
  }
}