package com.tw.myKitchen.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table (name = "menu_items")

public class MenuItem {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private long id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column (name = "price", nullable = false)
    private double price;
    @Column (name = "item_type", nullable = false)
    private String type;

    public MenuItem(String name, Double price, String type) {
        this.name = name;
        this.price = price;
        this.type = type;
    }
}
