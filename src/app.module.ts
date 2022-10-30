import { Module } from '@nestjs/common';
import { AnimesModule } from './animes/animes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.DATABASE,
    ),
    AnimesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
