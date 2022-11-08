/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tlh.api;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class TodoListItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int listId;
    private int state;

    @Override
    public String toString() {
        return "TodoListItem{" + "id=" + id + ", name=" + name + ", listId=" + listId + ", state=" + state + '}';
    }

    public TodoListItem() {
    }

    public TodoListItem(String name, int listId, int state) {
        this.name = name;
        this.listId = listId;
        this.state = state;
    }

    public TodoListItem(int id, String name, int listId, int state) {
        this.id = id;
        this.name = name;
        this.listId = listId;
        this.state = state;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getListId() {
        return listId;
    }

    public void setListId(int listId) {
        this.listId = listId;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }
}
