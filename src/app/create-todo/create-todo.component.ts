import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  todoService;
  newValue='';
  constructor(todoService:TodoService) { 
    this.todoService=todoService;
  }

  ngOnInit() {
  }
  onSubmit(form){
     this.todoService.onSubmit(form.value);
    
      
  }
}
