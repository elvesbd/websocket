// rastreador.controller.ts

import { Controller, Post, Body } from '@nestjs/common';

@Controller()
export class TrackerController {
  constructor() {}

  @Post('dados')
  receberDados(@Body() dados: any) {
    console.log('Dados recebidos do rastreador:', dados);
    // Faça o processamento dos dados recebidos aqui
  }
}
