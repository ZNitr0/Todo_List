import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../model/todo.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mode =  'list';
  public todos: Todo[] = [];
  public title: string = 'Lista de Tarefas';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
        
      ])],
        dueDate: [''],
        dueTime: ['']
    });
    this.load();
  }
add() {
  const raw = this.form.controls['title'] && this.form.controls['title'].value ? this.form.controls['title'].value : '';
  const title = raw.toString().trim();
  if (!title) { return; }

  const id = this.todos.length + 1;
  const createdAt = Date.now();  // <- registra o momento da criação

  this.todos.push({ id, title, done: false, createdAt });
  this.save();
  this.form.reset();
  this.changeMode('list');
}


  clear() {
    this.form.reset();
  }

  remover(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    this.save();

    }
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.save();

  }

  markAsUnDone(todo: Todo) {
    todo.done = false;
    this.save();
  }

  save(){
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
    
  }

  load() {
    const data = localStorage.getItem('todos');
    if(data){
      this.todos = JSON.parse(data);
    }else{
      this.todos = [];
    }
  }

  changeMode(mode: string) {
    this.mode = mode;
  }

}