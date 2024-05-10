// tcp-server.service.ts

import { Injectable } from '@nestjs/common';
import * as net from 'net';

@Injectable()
export class TcpServerService {
  constructor() {
    this.setupServer();
  }

  private setupServer() {
    const server = net.createServer(socket => {
      console.log('Cliente conectado.');

      socket.on('data', data => {
        console.log('Dados recebidos do cliente:', data.toString());
        // Faça o processamento dos dados recebidos aqui
      });

      socket.on('end', () => {
        console.log('Cliente desconectado.');
      });
    });

    server.listen(3000, '0.0.0.0', () => {
      console.log('Servidor TCP está ouvindo em: 0.0.0.0:3000');
    });
  }
}
