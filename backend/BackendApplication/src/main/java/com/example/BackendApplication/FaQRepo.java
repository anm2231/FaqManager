package com.example.BackendApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface FaQRepo extends JpaRepository<FaQ, Integer>{ //as we are using int as an object here, we use Integer instead of int
// aslo here we have to passby refernece and not by value so we use Integer and not int, this Interger is for the id(primary key) in faq

    List<FaQ> findByQuestionContainingIgnoreCase(String keyword);
    List<FaQ> findByCategoryIgnoreCase(String category);
    List<FaQ> findByTagsIgnoreCase(String tag);
}
