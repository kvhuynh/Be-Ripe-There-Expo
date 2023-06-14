package com.kvhuynh.server.services;

import org.springframework.stereotype.Service;

import com.kvhuynh.server.models.MealCalendar;
import com.kvhuynh.server.models.MealDate;
import com.kvhuynh.server.models.User;
import com.kvhuynh.server.repositories.CalendarRepository;
import com.kvhuynh.server.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CalendarService {
    
    private final CalendarRepository calendarRepository;

    private final UserRepository userRepository;

    public void createCalendar(User user) {
        MealCalendar calendar = new MealCalendar();
        user.setMealCalendar(calendar);
        userRepository.save(user);
    }

    // date format example Thursday May 25th 2023;

    public void createDate(MealCalendar calendar, MealDate date) {

    }

    // MealDate mealDate = new Mealdate();
    // mealDate.setDate(date);
    // mealDate.setMealTime(mealTime);
}
