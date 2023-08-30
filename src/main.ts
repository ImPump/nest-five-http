import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'; //NestExpressApplication 的泛型参数才有 useStaticAssets这些方法
import { AppModule } from './app.module';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/static' }); //指定 prefix 为 static
  await app.listen(3000);
}
bootstrap();
