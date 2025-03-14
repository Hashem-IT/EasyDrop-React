package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private double price;

    @Column(nullable = false)
    private String addressFrom;

    @Column(nullable = false)
    private String addressTo;

    @Column(nullable = false)
    private double weight;

    @Column(nullable = false)
    private String status; // 'offen', 'gebucht', 'geliefert'

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User owner;

    // Standardkonstruktor, Getter und Setter
}
