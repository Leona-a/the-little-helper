package com.tlh.api;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class TodoListService {
    public List<TodoList> getTodoList() {
        return List.of(
                new TodoList(1, "My midterms study list", "user1"),
                new TodoList(2, "My birthday wish list", "user1")
        );
    }
}
