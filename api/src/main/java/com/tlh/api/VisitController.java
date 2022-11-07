/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tlh.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author 71580
 */
@Controller
public class VisitController {
    @RequestMapping("/localhost:3000")
    public String redirect(){
        return "redirect:http://localhost:3000/welcome";
    }
}
