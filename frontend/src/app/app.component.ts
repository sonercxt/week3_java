import { Component } from '@angular/core';
import { Todo } from './Todos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly ROOT_URL = 'http://localhost:8080/api/todos';
  newTodo: string;
  id: number;
  todos: Observable<Todo[]>;
  checkTodo: boolean;
  // newPost: Observable<any>;

  // addTodo() {
  //   let todo = new Todo();
  //   todo.name = this.newTodo;
  //   todo.isCompleted = true;
  //   this.todos.push(todo);
  //   this.newTodo = '';
  // }

  ngOnInit() {
    this.getTodo();
  }

  getTodo() {
    this.todos = this.http.get<Todo[]>(this.ROOT_URL);
    console.log(this.todos)
  }

  addTodo() {
    const data: Todo = {
      todo: this.newTodo,
      id: null,
      isChecked: this.checkTodo
    };
    this.http.post<Todo[]>(this.ROOT_URL, data).subscribe((res) => {
      this.getTodo();
    });
    this.newTodo = '';
  }

  deleteTodo(pId: number) {
    this.http.delete<Todo[]>(this.ROOT_URL + '/' + pId).subscribe((res) => {
      this.getTodo();
    });
  }

  bulk(e: any){
    if(e.target.checked === true){
      this.checkTodo = true
    } else {
      this.checkTodo = false
    }

    console.log(this.checkTodo)
  }

  constructor(private http: HttpClient) {}
}
