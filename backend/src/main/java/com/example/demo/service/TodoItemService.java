package com.example.demo.service;

import com.example.demo.data.entity.TodoItem;
import com.example.demo.data.repository.TodoItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoItemService {
   @Autowired
   private TodoItemRepository todoItemRepository;

   public List getAllTodos() {
      return (List) this.todoItemRepository.findAll();
   }

   public TodoItem createTodo(TodoItem todoItem) {
      return todoItemRepository.save(todoItem);
   }

   public void removeTodo(Long id){
      todoItemRepository.deleteById(id);
   }

   public TodoItem updateTodo(Long id, TodoItem todoItem) {
      todoItem.setId(id);
      return todoItemRepository.save(todoItem);
   }
}
