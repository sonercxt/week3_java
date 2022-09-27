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
  todos: Observable<Todo[]>;
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

  getTodo(){
    this.todos = this.http.get<Todo[]>(this.ROOT_URL);
  }

  addTodo() {
    const data: Todo = {
      todo: this.newTodo,
    };
    this.http.post<Todo[]>(this.ROOT_URL, data).subscribe((res) => {
      console.log(res);
    });

    this.getTodo();
  }

  constructor(private http: HttpClient) {}
}
