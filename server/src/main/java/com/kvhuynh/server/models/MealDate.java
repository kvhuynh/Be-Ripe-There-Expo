package com.kvhuynh.server.models;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="mealDates")
public class MealDate {

    private final String[] times = new String[]{"breakfast", "lunch", "dinner"};

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date date;

    // implement something that discriminates between breakfast lunch and dinner

    private String mealTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mealCalendar_id")
    private MealCalendar mealCalendar;
}
