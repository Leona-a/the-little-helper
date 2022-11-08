package com.tlh.api;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/listItem")
public class TodoListItemController {
    
    private final TodoListItemService todoListItemService;

    @Autowired
    public TodoListItemController(TodoListItemService todoListItemService) {
        this.todoListItemService = todoListItemService;
    }

    @GetMapping(path = "{listId}")
    public Iterable<TodoListItem> getTodoListItems(@PathVariable("listId") int listId) {
        return todoListItemService.getTodoListItems(listId);
    }
    
    @GetMapping(path = "{listId}/{id}")
    public Optional<TodoListItem> getTodoListItemById(@PathVariable("id") int id) {
        return todoListItemService.getTodoListItemById(id);
    }
    
    @PostMapping
    public TodoListItem createList(@RequestBody TodoListItem listItem) {
        return todoListItemService.create(listItem);
    }
    
    @PutMapping
    public TodoListItem updateList(@RequestBody TodoListItem listItem) {
        return todoListItemService.update(listItem);
    }
    
    @DeleteMapping(path = "{id}")
    public boolean deleteList(@PathVariable("id") int id) {
        todoListItemService.delete(id);
        
        return true;
    }
}
