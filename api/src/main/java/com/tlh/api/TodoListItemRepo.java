/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.tlh.api;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author coola
 */
public interface TodoListItemRepo extends CrudRepository<TodoListItem, Integer> {
    Iterable<TodoListItem> findByListId(@Param("listId") int listId);
}
