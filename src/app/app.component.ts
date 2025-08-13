import { Component } from '@angular/core';
import { todo } from 'src/model/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: todo[] = [] ;
  public title: string = ('Lista de Tarefas');

  constructor() {
    this.todos.push( {id: 1, title:'estudar angular', done: false} );
     this.todos.push({id: 2, title:'ir a cademia ', done: false})
      this.todos.push({id: 3, title:'tomar 5 litros de água', done: true}) 
  }

  remover( todo : todo ){
      const index = this.todos.indexOf(todo);
      if(index !== -1){
        this.todos.splice(index, 1);
      }
  }

  markAsDone( todo : todo ){
    todo.done = true;
  }

  markAsUnDone( todo : todo ){
    todo.done = false;
  }

}

