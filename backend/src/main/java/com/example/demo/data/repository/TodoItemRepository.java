package com.example.demo.data.repository;

import com.example.demo.data.entity.TodoItem;
import org.springframework.data.repository.CrudRepository;


public interface  TodoItemRepository extends CrudRepository<TodoItem, Long> {
}
