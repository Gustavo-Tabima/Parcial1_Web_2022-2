import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CafeModule } from './cafe/cafe.module';
import { TiendaModule } from './tienda/tienda.module';

@Module({
  imports: [CafeModule, TiendaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
