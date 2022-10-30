import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    DATABASE: process.env.DATABASE,
  };
});