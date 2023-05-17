package com.kvhuynh.server.models;

import java.util.Date;
import java.util.HashMap;

import javax.persistence.PreUpdate;

import org.hibernate.mapping.Map;
import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "recipes")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "First Name is required!")
    @Size(min = 3, max = 30, message = "name must be between 3 and 30 characters")
    private String recipeName;

    @NotEmpty(message = "Email is required!")
    @Email(message = "Please enter a valid email!")
    private String recipeDescription;

    @NotEmpty(message = "Password is required!")
    private Double carbohydrateAmount;

    @Column
    private Double calorieAmount;

    @Column
    private Double proteinAmount;

    @Column
    private Double fatAmount;

    @Column
    private Map ingredients;

    @Column
    private String imageUrl;

    @Column(updatable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createdAt;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date updatedAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = new Date();
    }

    public Recipe() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRecipeName() {
        return recipeName;
    }

    public void setRecipeName(String recipeName) {
        this.recipeName = recipeName;
    }

    public String getRecipeDescription() {
        return recipeDescription;
    }

    public void setRecipeDescription(String recipeDescription) {
        this.recipeDescription = recipeDescription;
    }

    public Double getCarbohydrateAmount() {
        return carbohydrateAmount;
    }

    public void setCarbohydrateAmount(Double carbohydrateAmount) {
        this.carbohydrateAmount = carbohydrateAmount;
    }

    public Double getCalorieAmount() {
        return calorieAmount;
    }

    public void setCalorieAmount(Double calorieAmount) {
        this.calorieAmount = calorieAmount;
    }

    public Double getProteinAmount() {
        return proteinAmount;
    }

    public void setProteinAmount(Double proteinAmount) {
        this.proteinAmount = proteinAmount;
    }

    public Double getFatAmount() {
        return fatAmount;
    }

    public void setFatAmount(Double fatAmount) {
        this.fatAmount = fatAmount;
    }

    // public HashMap<String, String> getIngredients() {
    //     return ingredients;
    // }

    // public void setIngredients(HashMap<String, String> ingredients) {
    //     this.ingredients = ingredients;
    // }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

}