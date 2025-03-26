import { Module } from '@nestjs/common';
import { ProperyModule } from './propery/propery.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { pgConfig } from './config/dtabase.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(pgConfig),
    ProperyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
