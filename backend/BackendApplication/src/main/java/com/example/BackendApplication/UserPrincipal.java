package com.example.BackendApplication;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

public class UserPrincipal implements UserDetails {  //this class is responsible for wraping the User entity and implementing the UserDetails

    //the UserDetails has methods that give the spring information about the user like role
    private User user;  //this will store the User entity from the database

    public UserPrincipal(User user) {  //constructor to initialize with The User object user
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {  //returns the authorities granted to the User for user authentication tasks
        return Collections.singleton(new SimpleGrantedAuthority("ROLE_" + user.getRole())); //this simply granted authority
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }


    //all the below  functions are the default functions needed with UserDetails
    @Override
    public boolean isAccountNonExpired() { //for checking if the account has expired, default with UserDetails
        return true;
    }
    @Override
    public boolean isAccountNonLocked() {  //locked or not in case of a ban
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    @Override
    public boolean isEnabled() {  //enabled or disabled
        return true;
    }

    public User getUser() {
        return user;
    }
}