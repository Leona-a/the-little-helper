package com.tlh.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoListService {
    
    @Autowired
    TodoListRepo repo;
    
    public Iterable<TodoList> getTodoList() {
        return repo.findAll();
    }

    public void delete(Integer id) {
        var exists = repo.existsById(id);
        if(!exists) {
            throw new IllegalStateException("Missing resource identif"
                    + "ied by: " + id);
        }
        
        repo.deleteById(id);
    }
    

    public TodoList create(TodoList list) {
        return repo.save(list);
    }
}
