import { Module } from '@nestjs/common';
import { WebSocketGatewayConnection } from './websocket.gateway';

@Module({
  providers: [WebSocketGatewayConnection],
})
export class WebSocketModule {}
