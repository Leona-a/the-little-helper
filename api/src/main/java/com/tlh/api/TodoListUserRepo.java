
package com.tlh.api;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


//@author Gary

public interface TodoListUserRepo extends CrudRepository<TodoListUser, Integer> {
    Iterable<TodoListUser> findByUserId(@Param("userId") int userId);
}
