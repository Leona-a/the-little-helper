package com.tlh.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/list")
public class TodoListController {
    
    private final TodoListService todoListService;

    @Autowired
    public TodoListController(TodoListService todoListService) {
        this.todoListService = todoListService;
    }

    @GetMapping
    public Iterable<TodoList> getTodoList() {
        return todoListService.getTodoList();
    }
    
    @PostMapping
    public TodoList createList(@RequestBody TodoList list) {
        return todoListService.create(list);
    }
    
    @DeleteMapping(path = "{listId}")
    public boolean deleteList(@PathVariable("listId") int id) {
        todoListService.delete(id);
        
        return true;
    }
}
