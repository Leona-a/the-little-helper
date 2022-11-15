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
@RequestMapping(path = "api/list")
public class TodoListController {

    private final TodoListService todoListService;
    private TodoListUserService todoListUserService;
    
    @Autowired
    public TodoListController(TodoListService todoListService) {
        this.todoListService = todoListService;
    }
    
    @Autowired
    public void ToDoListUserController(TodoListUserService todoListUserService){
        this.todoListUserService = todoListUserService;
    }
    
    @GetMapping(path = "{userToken}")
    public Iterable<TodoList> getTodoList(@PathVariable("userToken") String userToken) {
        return todoListService.getTodoList(userToken);
    }

    @GetMapping(path = "(userId)")
    public Iterable<TodoListUser> getTodoListUser(@PathVariable("email") Integer userId){
        return todoListUserService.getTodoListUser(userId);
    }
    @GetMapping(path = "{userToken}/{listId}")
    public Optional<TodoList> getTodoListById(@PathVariable("listId") int id) {
        return todoListService.getTodoListById(id);
    }

    @GetMapping(path = "{userId}/{email}")
    public Optional<TodoListUser> getTodoListUserById(@PathVariable("email") Integer id){
        return todoListUserService.getTodoUserItemByUserId(id);
    }
    @PostMapping
    public TodoList createList(@RequestBody TodoList list) {
        return todoListService.create(list);
    }

    /*
    @PostMapping
    public TodoListUser createUserList(@RequestBody TodoListUser user){
        return todoListUserService.create(user);
    }
    */
    @DeleteMapping(path = "{listId}")
    public boolean deleteList(@PathVariable("listId") int id) {
        todoListService.delete(id);

        return true;
    }

    @PutMapping
    public Optional<TodoList> renameList(@RequestBody TodoList list) {
        todoListService.rename(list.getId(), list.getName());
        return todoListService.getTodoListById(list.getId());
    }

}
