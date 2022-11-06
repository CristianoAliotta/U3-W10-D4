import { Component, OnInit } from '@angular/core';
import { TaskClass } from '../classes/task-class.class';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(private todoService: TodosService) { }

  todos: TaskClass[] = this.todoService.todoArr
  delay: boolean = false

  ngOnInit(): void {
    setTimeout(() => {
      this.delay = true
    }, 2000)
  }
  onRemove(ele: TaskClass) {
    this.todoService.removeTask(ele)
  }
  onChecked(ele: TaskClass) {
    this.todoService.checkTask(ele)
  }

}
