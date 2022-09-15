package com.example.demo.controller;

import com.example.demo.data.entity.TodoItem;
import com.example.demo.service.TodoItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")

public class TodoItemController {
  @Autowired private TodoItemService todoItemService;

  @CrossOrigin
  @GetMapping("/todos")
  public List<TodoItem> getTodo() {
     return todoItemService.getAllTodos();
  }

  @PostMapping("/todos")
    public TodoItem AddTodoItem(@RequestBody TodoItem todoItem){
      return todoItemService.createTodo(todoItem);
  }

  @DeleteMapping("/todos/{id}")
  public void deleteTodo(@PathVariable Long id) {
    todoItemService.removeTodo(id);
  }


}
