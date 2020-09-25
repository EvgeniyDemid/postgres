import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { MyLogger } from './modules/Loger/loger.service';
// import {Subject} from "rxjs";

// const EventEmitter = require('events');
// const myEvent = new EventEmitter();
// myEvent.on('save', (data) => {
//   console.log(data)
// });
// myEvent.emit('save', {message: 'success'});

// const subject = new Subject();
// subject.subscribe((data) => {
//   console.log(data)
// });
// subject.next("qweqwe");

const port = process.env.PORT || 8080

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger:true
  });
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
  app.useLogger(new MyLogger());
  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}`, "Bootstrap")
}
bootstrap();
