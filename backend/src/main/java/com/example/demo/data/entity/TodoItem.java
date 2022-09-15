package com.example.demo.data.entity;

import javax.persistence.*;


@Entity
public class TodoItem {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long id;
    private String todo;

    public TodoItem (){

    }

    public TodoItem (Long pId, String pTodo){
        this.todo = pTodo;
        this.id = pId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTodo() {
        return todo;
    }

    public void setTodo(String todo) {
        this.todo = todo;
    }
}
