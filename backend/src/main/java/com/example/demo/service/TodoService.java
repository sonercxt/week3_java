package com.example.demo.service;

import com.example.demo.dto.ToDoItem;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Arrays;
import java.util.List;

@Service
public class TodoService {

    private List<ToDoItem> toDoItemList = Arrays.asList(
            new ToDoItem(),
            new ToDoItem(1, "study english"),
            new ToDoItem(2, "cleaning")
    );

    public List<ToDoItem> findAll() {
        return this.toDoItemList;
    }

    public ToDoItem saveTodo(ToDoItem toDoItem) {
        this.toDoItemList.add(toDoItem);
        return toDoItem;
    }

    public String removeTodo(int id) {
        toDoItemList.remove(id);
        return "product removed !! " + id;
    }
}
