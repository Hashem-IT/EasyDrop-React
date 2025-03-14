package com.example.demo.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("FAHRER")
public class Fahrer extends User {
    private String fahrzeug;

    public String getFahrzeug() { return fahrzeug; }
    public void setFahrzeug(String fahrzeug) { this.fahrzeug = fahrzeug; }
}
