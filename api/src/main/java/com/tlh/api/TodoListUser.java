

package com.tlh.api;

import java.io.Serializable;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Entity;


//@author Gary

@Entity
public class TodoListUser implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    private String email;
    private boolean banState = false;

    public TodoListUser() {
    }

    public TodoListUser(int userId, String email, boolean banState) {
        this.userId = userId;
        this.email = email;
        this.banState = banState;
    }
    
    public String getEmail() {
        return email;
    }

    public boolean getBanState() {
        return banState;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setBanState(boolean banState) {
        this.banState = banState;
    }
    public void setUserId(int userID) {
        this.userId = userID;
    }

    public int getUserId() {
        return userId;
    }
    public void ban(){
        banState = true;
    }
    
}
