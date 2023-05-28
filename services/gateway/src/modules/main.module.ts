import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongoClient  } from 'mongodb'

import { MainController } from '../contollers';
import { QueriesService } from '../services';

@Module({
  imports: [HttpModule],
  controllers: [MainController],
  providers: [
      QueriesService,
      {
        provide: 'MONGO',
        useFactory: async () => {
            const connectionStr = 'mongodb://root:example@mongo:27017/admin';
            const mongoClient = new MongoClient(connectionStr);
            await mongoClient.connect();
            await mongoClient.db().command({ping: 1});
            return mongoClient;
        }
      }
    ],
})

export class MainModule {}