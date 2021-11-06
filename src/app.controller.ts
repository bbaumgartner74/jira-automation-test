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
    console.log(`Issue ${body.key} transitioned from 'Todo' to 'In Progress'.`);
    console.log(`Assignee: ${body.fields.assignee.displayName}`);
  }

  // 200 - Transition from "Todo" to "In Progress"
  @Post('/transition/200')
  getIssueTransitionedToReview(@Body() body: any): void {
    console.log(`Issue ${body.key} transitioned to 'Review'.`);
    console.log(`Assignee: ${body.fields.assignee.displayName}`);
  }

  // 300 - Transition from "In Progress" to "Todo" && Label: "Rejected"
  @Post('/transition/300')
  getIssueTransitionedFromInProgressToTodo(@Body() body: any): void {
    console.log(
      `Issue ${body.key} transitioned from 'In Progress' to 'Todo'. The BR was rejected.`,
    );
    console.log(`Assignee: ${body.fields.assignee.displayName}`);
  }

  // 400 - Transition from "Todo" to "In Progress" --> Pending round x
  @Post('/transition/400')
  getIssueTransitionedFromTodoToInProgressPending(@Body() body: any): void {
    console.log(
      `Issue ${body.key} transitioned from 'Todo' to 'In Progress'. BR round x.`,
    );
    console.log(`Assignee: ${body.fields.assignee.displayName}`);
  }

  // 500 - Transition to "Done" --> BR approved
  @Post('/transition/500')
  getIssueTransitionedToDoneApproved(@Body() body: any): void {
    console.log(body);
  }
}
