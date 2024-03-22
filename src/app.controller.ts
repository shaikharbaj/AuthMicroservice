import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ role: 'item', cmd: 'create' })
  createItem(itemDto:any) {
    console.log(itemDto);
    return "Hiiii";
  }
}
