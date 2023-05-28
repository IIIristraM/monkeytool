import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';

import { MainController } from '../contollers';
import { QueriesService } from '../services';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot('mongodb://root:example@mongo:27017')
  ],
  controllers: [MainController],
  providers: [
      QueriesService,
    ],
})

export class MainModule {}