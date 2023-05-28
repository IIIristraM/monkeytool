import { Module } from '@nestjs/common';
import { createClient } from 'redis';

import { QueriesController } from '../contollers';
import { QueriesService } from '../services';

@Module({
  imports: [],
  controllers: [QueriesController],
  providers: [
      QueriesService,
      {
        provide: 'REDIS',
        useFactory: async () => {
            const redisClient = createClient({
                url: 'redis://redis:6379'
            })
            
            await redisClient.connect();
            return redisClient;
        }
      }
    ],
})
export class MainModule {}