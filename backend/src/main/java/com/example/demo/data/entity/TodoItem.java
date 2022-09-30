package com.example.demo.data.entity;

import javax.persistence.*;


@Entity
public class TodoItem {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long id;
    private String todo;

    private boolean checking;

    public TodoItem (){

    }

    public TodoItem (Long pId, String pTodo , boolean pChecking){
        this.todo = pTodo;
        this.id = pId;
        this.checking = pChecking;
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

    public boolean isChecking() {
        return checking;
    }

    public void setChecking(boolean checking) {
        this.checking = checking;
    }
}
