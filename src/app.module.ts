import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ContentModule } from './modules/content/content.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './shared/errors/http-error-filter';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    DatabaseModule,
    ContentModule
  ],
  controllers: [],
providers: [{
  provide: APP_FILTER,
  useClass: HttpErrorFilter
}],
})
export class AppModule {}
