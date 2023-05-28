import { Controller, Post } from '@nestjs/common';

import { QueriesService } from '../services';

@Controller('/queries')
export class QueriesController {
  constructor(
    private readonly queriesService: QueriesService,
  ) {}

  @Post('/execute')
  execute() {
    return this.queriesService.execute();
  }
}