/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tlh.api;
import java.io.File;
import java.io.FileWriter;
import java.io.FileReader;
import java.io.BufferedWriter;
import java.io.BufferedReader;
import java.io.IOException;
//import java.util.List;

/**
 *
 * @author Gary
 */
//Why god did I name it user when this a user manager
public class User {
    private String username;
    private String password;
    private String userpass = combine(username, password);
    /**
     * 
     * @return the username
     */
    public String getUsername() {
        return username;
    }
    /**
     * constructor for a user, this should be called once as this functions as a user manager
     * @param user username
     * @param pass password
     */
    public User(String user, String pass){
        createData();
        username = user;
        password = pass;
    }
    /**
     * Blackbox method for combining the username and password into one for the purpose of
     * insertion into persistent file
     * @param username username
     * @param password password
     * @return the combined string separated by one whitespace
     */
    private String combine(String username, String password){
        StringBuilder c = new StringBuilder();
        c.insert(0, username);
        c.insert(username.length(), " ");
        c.insert(username.length() + 1, password);
        String done = c.toString();
        userpass = done;
        return done;
    }
    /**
     * divides username and passwords into two strings to be stored in the username and password variables
     * @param userPass string to be divided
     */
    private void divide(String userPass){
       
        String[] words = userPass.split(userPass);
        username = words[0];
        password = words[1];
         
    }
    /**
     * creates the persistent username and password storage, is called before any method that needs to manage data to prevent 
     * exceptions
     */
    private static void createData(){
        try{
            File userData = new File("userData.txt");
            if(userData.createNewFile()){
                System.out.println("created new file userData.txt" );
            }
            else{
                System.out.println("File userData.txt exists");
            }
            
        } catch(IOException e) {
            System.out.println("error");
        }
    }
    /**
     * functionally a the method used to register a user into the userData.txt file
     */
    private void addUserToData(){
        createData();
        String combined = combine(username, password);
        try{
            BufferedWriter save = new BufferedWriter(new FileWriter("userData.txt"));
            save.append(combined);
            save.newLine();
            save.flush();
            save.close();
        } catch(IOException e){
            System.out.println("error writing data");
        }
    }
    /**
     * will check userData.txt for a username and password combo
     * @param userE 
     * @param passE
     * @return 
     */
    private boolean checkForUserPrex(String userE, String passE){
        createData();
        try{
            BufferedReader read = new BufferedReader(new FileReader("userData.txt"));
            String toBeChecked = combine(userE, passE);
            String currentLine = read.readLine();
            while(currentLine != null) {
                if(currentLine.equals(toBeChecked)){
                    return true;
                }
                currentLine = read.readLine();
            }
        } catch(IOException e){
            e.printStackTrace();
        }
        return false;
    }
}
