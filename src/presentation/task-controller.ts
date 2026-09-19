import { Controller, Post, Body } from '@nestjs/common';
import { TaskService } from '../application/task-service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('create')
  createTask(@Body() body: { title: string, description: string, assignedTo: string }): Task {
    return this.taskService.createTask(body.title, body.description, body.assignedTo);
  }

  @Post('assign')
  assignTask(@Body() body: { taskId: string, assignedTo: string }): Task {
    return this.taskService.assignTask(body.taskId, body.assignedTo);
  }

  @Post('update-status')
  updateStatus(@Body() body: { taskId: string, status: string }): Task {
    return this.taskService.updateStatus(body.taskId, body.status);
  }
}