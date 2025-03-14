package com.example.demo.controller;

import com.example.demo.model.Fahrer;
import com.example.demo.model.Firma;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{email}")
    public Optional<User> getUserByEmail(@PathVariable String email) {
        return userService.getUserByEmail(email);
    }

    @PostMapping("/fahrer")
    public User createFahrer(@RequestBody Fahrer fahrer) {
        return userService.saveUser(fahrer);
    }

    @PostMapping("/firma")
    public User createFirma(@RequestBody Firma firma) {
        return userService.saveUser(firma);
    }
}
