import { IListItem } from 'app/components/common/list-item/IListItem';

export class Task implements IListItem {
  id: number;
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