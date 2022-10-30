import { Document } from 'mongoose';

export interface Anime extends Document {
  readonly name: string;
  readonly url: string;
  readonly date: string;
  readonly image: {
    url: string;
    public_id: string;
  };
}

export interface AnimeModule {
  readonly name: string;
  readonly url: string;
  readonly date: string;
  readonly image: String
}
