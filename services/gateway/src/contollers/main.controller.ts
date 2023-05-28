import { Controller, Get } from '@nestjs/common';

import { QueriesService } from '../services';

@Controller()
export class MainController {
  constructor(
    private readonly queriesService: QueriesService,
  ) {}

  @Get()
  ping() {
    return this.queriesService.execute();
  }
}