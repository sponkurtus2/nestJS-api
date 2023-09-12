export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
