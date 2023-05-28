import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class QueriesService {
    constructor(private readonly httpService: HttpService) {}
    
    execute() {
        return this.httpService.post('http://queries-processor:3000/queries/execute').pipe(map(x => x.data));
    }
}