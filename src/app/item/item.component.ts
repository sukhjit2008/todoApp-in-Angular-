import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 @Input() todo;
 todoService:TodoService
  constructor(todoService:TodoService) {
   this.todoService=todoService
   }
  done=false;
  ngOnInit() {
   
  }
  delTodo(){
    this.todoService.onDelTodo({name:this.todo.name})
   
  }
  doneTodo(){
  this.done=true;
  }
}
