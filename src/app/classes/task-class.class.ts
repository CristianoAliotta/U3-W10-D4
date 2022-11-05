import { TaskInterface } from "../interfaces/task-interface.interface";

export class TaskClass implements TaskInterface {
    id?: number;
    title: string;
    completed: boolean = false;
    constructor(title: string) {
        this.title = title;
    }


}
