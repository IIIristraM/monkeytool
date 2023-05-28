import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class QueriesService {
    constructor(@Inject('REDIS') private readonly redisClient: RedisClientType) {}

    async execute() {
        await this.redisClient.set('key', 'value');
        const value = await this.redisClient.get('key');
        return { result: value };
    }
}