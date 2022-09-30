import { Component } from '@angular/core';
import { Todo } from './Todos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly ROOT_URL = 'http://localhost:8080/api/todos';
  newTodo: string;
  id: number;
  // todos: Observable<Todo[]>;
  todoList: Todo[];
  checkTodo: boolean;
  todoWithoutLine: string = 'todo-without-line';
  todoWithLine: string = 'todo-with-line';

  ngOnInit() {
    this.getTodo();
  }

  getTodo() {
    this.http.get<Todo[]>(this.ROOT_URL).subscribe((data) => {
      this.todoList = data;
    });
  }

  addTodo() {
    const data: Todo = {
      todo: this.newTodo,
      id: null,
      checking: this.checkTodo,
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

  handleClickCheckboxUpdate(e: any, pId: any) {
    let selectedTodo = [];
    if (e.target.checked === true) {
      this.checkTodo = true;
    } else {
      this.checkTodo = false;
    }

    selectedTodo = this.todoList.filter((todo) => todo.id === pId);
    console.log(selectedTodo);
    const data: Todo = {
      todo: selectedTodo[0].todo,
      id: null,
      checking: this.checkTodo,
    };

    this.http.put<any>(this.ROOT_URL + '/' + pId, data).subscribe((res) => {
      this.getTodo();
    });
  }

  constructor(private http: HttpClient) {}
}
