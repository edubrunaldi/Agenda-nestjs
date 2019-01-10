import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.URL_DB, {useNewUrlParser: true}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
