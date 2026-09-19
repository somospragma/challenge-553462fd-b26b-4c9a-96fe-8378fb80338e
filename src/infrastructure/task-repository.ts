import { Task } from '../domain/task';

export class TaskRepository {
  private tasks: Task[] = [];

  save(task: Task): void {
    this.tasks.push(task);
  }

  findById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }
}