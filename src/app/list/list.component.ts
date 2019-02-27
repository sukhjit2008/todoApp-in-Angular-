import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todos=[];
  todoService;
  constructor(todoService:TodoService) { 
    this.todoService=todoService;
   
  }

  ngOnInit() {
    this.todos=this.todoService.addtodos();
    this.todoService.changeList.subscribe(
      ()=>{
        this.todos=this.todoService.addtodos();
      }
    );
  }

}
