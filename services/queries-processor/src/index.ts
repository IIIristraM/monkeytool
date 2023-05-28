import { NestFactory } from '@nestjs/core';

import { MainModule } from './modules';

const hostname = '0.0.0.0';
const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  await app.listen(port, hostname);

  console.log(`Server running at http://${hostname}:${port}/`);
}

bootstrap();
