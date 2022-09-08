package com.example.demo.controller;

import com.example.demo.dto.ToDoItem;
import com.example.demo.service.TodoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TodoController {
TodoService todoService;

    public TodoController(TodoService pTodoService) {
        this.todoService = pTodoService;
    }

    @GetMapping("/todo/get")
    public List<ToDoItem> getAllTodos() {
        return todoService.findAll();
    }

    @PostMapping("/todo/post")
    public ToDoItem addTodoItem(@RequestBody ToDoItem toDoItem) {
        return todoService.saveTodo(toDoItem);
    }

    @DeleteMapping("/todo/delete/{id}")
    public String deleteTodo(@PathVariable int id) {
        return todoService.removeTodo(id);
    }


}
