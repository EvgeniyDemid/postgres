import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ContentModule } from './modules/content/content.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from './shared/errors/http-error-filter';
import { UsersModule } from './modules/users/users.module';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    DatabaseModule,
    ContentModule,
    UsersModule
  ],
  controllers: [],
providers: [
//   {
//   provide: APP_FILTER,
//   useClass: HttpErrorFilter
// }
],
})
export class AppModule {}
