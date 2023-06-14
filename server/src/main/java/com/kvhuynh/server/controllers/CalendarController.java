package com.kvhuynh.server.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kvhuynh.server.services.CalendarService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/calendar")
@RequiredArgsConstructor
public class CalendarController {
    
    private final CalendarService calendarService;
}
