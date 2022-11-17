package com.tlh.api;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoListService {

    @Autowired
    TodoListRepo repo;

    public Iterable<TodoList> getTodoList(String userToken) {
        return repo.findByUserToken(userToken);
    }

    public Optional<TodoList> getTodoListById(Integer id) {
        ensureListExists(id);
        return repo.findById(id);
    }

    private void ensureListExists(Integer id) {
        var exists = repo.existsById(id);
        if (!exists) {
            throw new IllegalStateException("Missing resource identified by: " + id);
        }
    }

    public void delete(Integer id) {
        ensureListExists(id);

        repo.deleteById(id);
    }

    public TodoList create(TodoList list) {
        return repo.save(list);
    }

    public void rename(Integer id, String name) {
        ensureListExists(id);
        Optional<TodoList> optionalTodoList = repo.findById(id);
        if (optionalTodoList.isPresent()) {
            TodoList todoList = optionalTodoList.get();
            todoList.setName(name);
            repo.save(todoList);
        }
    }
}
