
 
package com.tlh.api;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



//@author Gary
 
@Service
public class TodoListUserService {
    @Autowired
    TodoListUserRepo repo;
    
    public Iterable<TodoListUser> getTodoListUser(Integer userId) {
        return repo.findByUserId(userId);
    }

    public Optional<TodoListUser> getTodoUserItemByUserId(Integer userId) {
        ensureListExists(userId);
        return repo.findById(userId);
    }

    private void ensureListExists(Integer userId) {
        var exists = repo.existsById(userId);
        
        if (!exists) {
            throw new IllegalStateException("Missing resource identified by: " + userId);
        }
    }

    public void delete(Integer userId) {
        ensureListExists(userId);
        repo.deleteById(userId);
    }

    public TodoListUser create(TodoListUser user) {
        return repo.save(user);
    }

    public TodoListUser update(TodoListUser user) {
        return repo.save(user);
    }
}

