//uses the functionalities of Jpa repositories which contains api for basic functions like create,read,delete,update

package com.example.BackendApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo  extends JpaRepository<User,Long> {
    User findByUsername(String username);
   // this is to find username in the login functionality
}

