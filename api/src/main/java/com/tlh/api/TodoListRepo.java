/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.tlh.api;

import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author coola
 */
public interface TodoListRepo extends CrudRepository<TodoList, Integer> {
    
}
