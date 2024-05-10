import { Module } from '@nestjs/common';
import { WebSocketModule } from './websocket/websocket.module';
import { TrackerController } from './tracker.controller';
import { TcpServerService } from './tcp.service';

@Module({
  imports: [WebSocketModule],
  controllers: [TrackerController],
  providers: [TcpServerService],
})
export class AppModule {}
