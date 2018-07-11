import { ITask } from './ITask';

export class Task implements ITask {
	id: string;
	description: string;

	constructor(o: ITask = <ITask>{}) {
		this.id = o.id || '';
		this.description = o.description || '';
	}
}
