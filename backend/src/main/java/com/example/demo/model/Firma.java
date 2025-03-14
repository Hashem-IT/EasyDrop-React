package com.example.demo.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("FIRMA")
public class Firma extends User {
    private String firmenName;

    public String getFirmenName() { return firmenName; }
    public void setFirmenName(String firmenName) { this.firmenName = firmenName; }
}
