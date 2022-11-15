package com.tlh.api;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoListItemService {

    @Autowired
    TodoListItemRepo repo;

    public Iterable<TodoListItem> getTodoListItems(int listId) {
        return repo.findByListId(listId);
    }

    public Optional<TodoListItem> getTodoListItemById(Integer id) {
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

    public TodoListItem create(TodoListItem listItem) {
        return repo.save(listItem);
    }

    public TodoListItem update(TodoListItem listItem) {
        return repo.save(listItem);
    }
}
