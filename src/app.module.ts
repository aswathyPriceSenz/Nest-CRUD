import { Module } from '@nestjs/common';
import { TasksService } from './modules/tasks/tasks.service';
import { TasksController } from './modules/tasks/tasks.controller';

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [TasksService],
})
export class AppModule {}
