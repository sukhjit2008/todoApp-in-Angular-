
import { Subject } from 'rxjs';

export class TodoService {
     private todos=[
      {name:'Sukhjit Singh'}
    ];


  changeList = new Subject<void>();
    
  constructor() { }

  onSubmit(name){
    const pos = this.todos.findIndex(
      (todo)=>{
        return todo.name===name.name;
      }
     
    )
    if(pos!== -1){
    return;
    }
  this.todos.push(name);
  this.changeList.next();
 
  
  }
  addtodos(){
    return this.todos.slice();
  }
  
   onDelTodo(name){
    const pos = this.todos.findIndex(
      (t)=>{
        return t.name===name.name
      }
    );
    this.todos.splice(pos,1);
    this.changeList.next();
   }
  
   
    }
