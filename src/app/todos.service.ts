import { Injectable } from '@angular/core';
import { TaskClass } from './classes/task-class.class';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoArr: TaskClass[] = [
    {
      id: 1,
      title: 'prova prova prova',
      completed: false
    }
  ]
  checkedArr: TaskClass[] = []
  constructor() { }
  removeTask(ele: TaskClass) {
    let index = this.todoArr.indexOf(ele)
    this.todoArr.splice(index, 1)
  }
  checkTask(ele: TaskClass) {
    let index = this.todoArr.indexOf(ele)
    this.todoArr.splice(index, 1)
    ele.completed = true
    this.checkedArr.push(ele)
  }
  undoTask(ele: TaskClass) {
    let index = this.checkedArr.indexOf(ele)
    this.checkedArr.splice(index, 1)
    ele.completed = false
    this.todoArr.push(ele)
  }
  addTask(ele: string) {
    let task: TaskClass = new TaskClass(ele)
    this.todoArr.push(task)
  }
}
