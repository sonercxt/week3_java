package com.example.demo.controller;




import com.example.demo.service.TodoItemService;
import com.example.demo.data.entity.TodoItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin (origins = "http://localhost:4200")
@RestController
@RequestMapping ("/api")
public class TodoItemController {
  @Autowired
  private TodoItemService todoItemService;

  @GetMapping ("/todos")
  public ResponseEntity getTodo() {
     return ResponseEntity.ok(todoItemService.getAllTodos()) ;
  }

  @PostMapping ("/todos")
    public TodoItem AddTodoItem(@RequestBody TodoItem todoItem){
      return todoItemService.createTodo(todoItem);
  }

  @DeleteMapping("/todos/{id}")
  public void deleteTodo(@PathVariable Long id) {
    todoItemService.removeTodo(id);
  }

  @PutMapping("/todos/{id}")
  public TodoItem updateTodo(@RequestBody TodoItem todoItem, @PathVariable Long id) {
    return todoItemService.updateTodo(id,todoItem);

  }


}
