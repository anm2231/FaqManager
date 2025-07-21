//taking information from the user

package com.example.BackendApplication;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="Users")

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // for auto Id incrementation
    @Column(nullable = false)
    private Long id;

    @Column(unique = true,nullable = false)
    private String username;

    @Column(nullable = false)
    private String Password;

    @Column(nullable = false)
    private String Email;

    @Column(nullable = false)
    private String role;

    @ManyToMany
    private List<FaQ> bookmarkedFaqs = new ArrayList<>();

    public List<FaQ> getBookmarkedFaqs() {
        return bookmarkedFaqs;
    }

    public void setBookmarkedFaqs(List<FaQ> bookmarkedFaqs) {
        this.bookmarkedFaqs = bookmarkedFaqs;
    }


    public User(){}  //default constructor needed by JPA to create instance of the Entity

    public User(String username, String Password, String Email, String role){
        this.username=username;
        this.Password=Password;
        this.Email=Email;
        this.role=role;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public Long getId(){
        return id;
    }
}
