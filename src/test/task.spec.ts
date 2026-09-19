import { Task } from '../../src/domain/task';

describe('Task', () => {
  it('should create a new task', () => {
    const task = new Task('', 'Test Task', 'Test Description', 'pending', 'User1');
    expect(task.title).toBe('Test Task');
  });

  it('should assign a task to a user', () => {
    const task = new Task('1', 'Test Task', 'Test Description', 'pending', '');
    task.assignTask('1', 'User2');
    expect(task.assignedTo).toBe('User2');
  });

  it('should update the status of a task', () => {
    const task = new Task('1', 'Test Task', 'Test Description', 'pending', 'User1');
    task.updateStatus('1', 'completed');
    expect(task.status).toBe('completed');
  });
});