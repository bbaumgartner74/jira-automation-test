import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 100 - Transition from "Todo" to "In Progress"
  @Post('/transition/100')
  getIssueTransitionedFromTodoToInProgress(@Body() body: any): void {
    console.log(body);
    console.log(`Issue ${body.key} transitioned from 'Todo' to 'In Progress'.`);
    console.log(`Assignee: ${body.fields.assignee.displayName}`);
  }

  // 200 - Transition from "Todo" to "In Progress"
  @Post('/transition/200')
  getIssueTransitionedToReview(@Body() body: any): void {
    console.log(body);
    console.log(`Issue ${body.key} transitioned to 'Review'.`);
    console.log(`Assignee: ${body.fields.assignee.displayName}`);
  }
}
