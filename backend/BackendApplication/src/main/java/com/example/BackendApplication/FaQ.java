package com.example.BackendApplication;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name="FAQ")

public class FaQ {  //this class maps to a table called FAQ with columns id,question,answer

@Id  //to create a primary key
@GeneratedValue(strategy = GenerationType.IDENTITY)

private int id;
private String question;
private String answer;
private String Title;
private String description;
private String category;

@ElementCollection  //this creates a one-to-many relationship between our tags and entity will save space.
private List<String> tags;

private String createdBy;
private LocalDateTime createdAt;
private LocalDateTime updatedAt;
public FaQ(){} //1 empty constructr jpa ke liye, bacuase it will cretae an instance of the entity Faq

    public FaQ(String answer,String question) {
        this.question = question;
        this.answer = answer;
    }

public Integer getid(){
    return id;
}

public String getQuestion(){
    return question;
}
public void setQuestion(String question){
    this.question=question;
}

public String getAnswer(){
    return answer;
}
public void setAnswer(String answer){
    this.answer=answer;
}

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }
}












