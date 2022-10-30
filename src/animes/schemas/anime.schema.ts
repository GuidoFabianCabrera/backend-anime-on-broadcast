import { Schema } from 'mongoose';

const AnimeImageSchema = new Schema({
  url: String,
  public_id: String
});

export const AnimeSchema = new Schema({
  name: String,
  url: String,
  date: String,
  image: AnimeImageSchema
});
