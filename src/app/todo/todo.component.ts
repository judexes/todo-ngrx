import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  completed: boolean = false;
  taskList: any[] = []
  newTodoForm = this.formBuilder.group({
    todoItem: ''
  })
    
  constructor(
    private formBuilder: FormBuilder
  ) { }
  
  

  addTask() {
    const value = this.newTodoForm.value.todoItem
    this.taskList.push({ id: this.taskList.length, name: value })
    window.localStorage.setItem('task', JSON.stringify(this.taskList))
    this.newTodoForm.reset();
    
  }
  

  ngOnInit(): void {
    this.taskList = window.localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : []
  }

}
function todoItem(todoItem: any) {
  throw new Error('Function not implemented.');
}

