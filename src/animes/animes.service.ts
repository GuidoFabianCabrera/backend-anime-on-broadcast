const animeOnBroadcast = require('@guidofc/anime-on-broadcast');
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CloudinaryService } from './../cloudinary/cloudinary.service';
import { Anime, AnimeModule } from './interfaces/anime.interface';

@Injectable()
export class AnimesService {
  constructor(
    @InjectModel('Anime') private readonly animeModel: Model<Anime>,
    private readonly cloudinary: CloudinaryService
  ) {}

  async updateAnimeOnBroadcast(): Promise<Anime[]> {
    const response: AnimeModule[] = await animeOnBroadcast();
    
    await this.animeModel.deleteMany({});
    await this.cloudinary.removeAllFolderFromCloudinary('anime');

    const cloneList: any = response.forEach(async (item: any) => {
      const animeWithImage = await this.cloudinary.uploadToCloudinary(item.image, 'anime');

      const dbAnime = {
        name: item.name,
        url: item.url,
        date: item.date,
        image: {
          url: animeWithImage.url,
          public_id: animeWithImage.public_id,
        },
      };

      const anime = new this.animeModel(dbAnime);

      return await anime.save();
    });

    return cloneList;
  }

  async getAnimes(): Promise<Anime[]> {
    return await this.animeModel.find();
  }
}
