import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ContentModule } from './modules/content/content.module';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    DatabaseModule,
    ContentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
