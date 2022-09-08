package com.example.demo.dto;

public class ToDoItem {
    private int id;
    private String todo;

    public ToDoItem() {
        this(0, "sleep");
    }

    public ToDoItem(int pId, String pTodo) {
        this.id = pId;
        this.todo = pTodo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTodo() {
        return todo;
    }

    public void setTodo(String todo) {
        this.todo = todo;
    }
}
