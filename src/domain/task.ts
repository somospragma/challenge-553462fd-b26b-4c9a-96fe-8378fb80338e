export class Task {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public status: string,
    public assignedTo: string
  ) {}

  createTask(title: string, description: string, assignedTo: string): Task {
    return new Task('', title, description, 'pending', assignedTo);
  }

  assignTask(taskId: string, assignedTo: string): Task {
    return new Task(taskId, '', '', 'assigned', assignedTo);
  }

  updateStatus(taskId: string, status: string): Task {
    return new Task(taskId, '', '', status, '');
  }
}