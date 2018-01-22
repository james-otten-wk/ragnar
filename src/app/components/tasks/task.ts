export class Task {
  name: string;
  completed: boolean;

  constructor(_name: string) {
    this.completed = false;
    this.name = _name;
  }
}

export enum TaskFilterType {
  'all',
  'completed',
  'NotStarted'
}