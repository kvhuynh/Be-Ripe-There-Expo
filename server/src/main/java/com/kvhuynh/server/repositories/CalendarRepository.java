package com.kvhuynh.server.repositories;

import org.springframework.data.repository.CrudRepository;

import com.kvhuynh.server.models.MealCalendar;

public interface CalendarRepository extends CrudRepository<MealCalendar, Long>  {
    
}
