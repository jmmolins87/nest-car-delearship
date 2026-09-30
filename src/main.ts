import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function main() {
  const app = await NestFactory.create(AppModule, {
    
  });
  await app.listen(3000);
}
await main();
