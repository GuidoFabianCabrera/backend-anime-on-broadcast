import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AnimesModule } from './animes/animes.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath: '.env',
    load: [config],
    isGlobal: true
  }),
    MongooseModule.forRoot(
      process.env.DATABASE,
    ),
    AnimesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
