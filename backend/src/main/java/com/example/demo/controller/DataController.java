package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.DataService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/data")  // Ändere den Endpoint
@CrossOrigin(origins = "http://localhost:3000") // Erlaubt Frontend-Zugriff
public class DataController {

    private DataService dataService;
    private final UserRepository userRepository;

    // Expliziter Konstruktor für Spring Boot Dependency Injection
    public DataController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")  // Neuer Endpoint
    public List<User> getAllUsers() {
        return dataService.getAllUsers();
    }
}
