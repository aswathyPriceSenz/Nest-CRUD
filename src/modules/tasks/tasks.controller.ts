import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from 'src/models/task.model';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Post()
  createTask(@Body() createTaskData: { title: string }): Task {
    return this.taskService.createTask(createTaskData.title);
  }

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: number): Task {
    return this.taskService.getTaskById(id);
  }

  @Put(':id')
  updateTask(
    @Param('id') id: number,
    @Body('status') status: 'OPEN' | 'DONE',
  ): Task {
    return this.taskService.updateTask(id, status);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number): void {
    return this.taskService.deleteTask(id);
  }
}
