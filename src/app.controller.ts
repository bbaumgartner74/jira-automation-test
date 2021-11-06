import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/transition')
  getIssueTransitionedData(@Body() body: any): void {
    console.log(body);
    console.log(
      `Issue Key ${body.key} transitioned from 'Todo' to 'In Progress'.`,
    );
  }
}
