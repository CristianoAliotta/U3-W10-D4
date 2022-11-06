import { Component, OnInit } from '@angular/core';
import { TaskClass } from '../classes/task-class.class';
import { TodosService } from '../todos.service';

@Component({
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss']
})
export class CompletedPage implements OnInit {

  constructor(private todoService: TodosService) { }
  taskChecked: TaskClass[] = this.todoService.checkedArr
  delay: boolean = false
  ngOnInit(): void {
    setTimeout(() => {
      this.delay = true
    }, 2000)
  }
  onUndo(ele: TaskClass) {
    this.todoService.undoTask(ele)
  }


}
