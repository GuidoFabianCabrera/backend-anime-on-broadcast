import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimesController } from './animes.controller';
import { AnimesService } from './animes.service';
import { AnimeSchema } from './schemas/anime.schema';
import { CloudinaryModule } from './../cloudinary/cloudinary.module';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Anime', schema: AnimeSchema }]),
    CloudinaryModule,
  ],
  controllers: [AnimesController],
  providers: [AnimesService],
})
export class AnimesModule { }
