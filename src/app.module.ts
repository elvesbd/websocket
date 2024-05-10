import { Module } from '@nestjs/common';
import { WebSocketModule } from './websocket/websocket.module';
import { TrackerController } from './tracker.controller';

@Module({
  imports: [WebSocketModule],
  controllers: [TrackerController],
  providers: [],
})
export class AppModule {}
