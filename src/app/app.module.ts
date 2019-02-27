import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { TodoService } from './todo.service';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component'

const routes=[
  {path:'create-todo', component:CreateTodoComponent},
  {path:'list', component:ListComponent},
  {path:'**', redirectTo:'/create-todo'}
]
@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent,
    ListComponent,
    ItemComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
