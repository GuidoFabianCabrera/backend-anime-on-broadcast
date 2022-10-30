import { Controller, Get } from '@nestjs/common';
import { AnimesService } from './animes.service';
import { Anime } from './interfaces/anime.interface';

@Controller('animes')
export class AnimesController {
  constructor(private readonly appService: AnimesService) {}

  @Get()
  async getAnimeOnBroadcastDb(): Promise<Anime[]> {
    return await this.appService.getAnimes();
  }

  @Get('/updateAnimes')
  async updateAnimeOnBroadcast(): Promise<Anime[]> {
    return this.appService.updateAnimeOnBroadcast();
  }
}
