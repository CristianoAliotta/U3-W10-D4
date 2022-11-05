import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  newTask: string = ''

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
  }
  onAddTask() {
    this.todoService.addTask(this.newTask)
    this.newTask = ''
  }
}
