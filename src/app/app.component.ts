import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../model/todo.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = 'Lista de Tarefas';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

    this.todos.push({ id: 1, title: 'estudar angular', done: false });
    this.todos.push({ id: 2, title: 'ir a academia', done: false });
    this.todos.push({ id: 3, title: 'tomar 5 litros de água', done: true });
  }

  add() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push({ id, title, done: false });
    this.form.reset();
  }

  remover(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUnDone(todo: Todo) {
    todo.done = false;
  }

}
