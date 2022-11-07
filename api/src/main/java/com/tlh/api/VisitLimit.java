/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/AnnotationType.java to edit this template
 */
package com.tlh.api;
import java.lang.annotation.*;


/**
 * 
 * @Title: VisitLimit.java
 * @Package com.tlh.api
 * @Description:limit user access times
 *
 *limit access
 * @author 71580
 */
@Retention (RetentionPolicy.RUNTIME)

@Target(ElementType.METHOD)
@Documented
public @interface VisitLimit {
//limit the number of time
int limitCounts() default 10;
//time limit
int timeout() default 90;

}
