package com.tlh.api;

public class TodoList {

    private int id;
    private String name;
    private String userToken;

    public TodoList() {
    }

    @Override
    public String toString() {
        return "TodoList{" + "id=" + id + ", name=" + name + ", userToken=" + userToken + '}';
    }

    public TodoList(int id, String name, String userToken) {
        this.id = id;
        this.name = name;
        this.userToken = userToken;
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

    public String getUserToken() {
        return userToken;
    }

    public void setUserToken(String userToken) {
        this.userToken = userToken;
    }

}
