import { Injectable } from '@nestjs/common';
import { Task } from '../domain/task';
import { TaskRepository } from '../infrastructure/task-repository';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  createTask(title: string, description: string, assignedTo: string): Task {
    const task = new Task('', title, description, 'pending', assignedTo);
    this.taskRepository.save(task);
    return task;
  }

  assignTask(taskId: string, assignedTo: string): Task {
    const task = this.taskRepository.findById(taskId);
    if (task) {
      task.assignTask(taskId, assignedTo);
      this.taskRepository.save(task);
    }
    return task;
  }

  updateStatus(taskId: string, status: string): Task {
    const task = this.taskRepository.findById(taskId);
    if (task) {
      task.updateStatus(taskId, status);
      this.taskRepository.save(task);
    }
    return task;
  }
}