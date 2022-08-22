package com.tw.myKitchen.controller;

import com.tw.myKitchen.model.MenuItem;
import com.tw.myKitchen.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
public class MenuController {

    @Autowired
    private MenuService menuService;

    @GetMapping("api/menu")
    public List<MenuItem> getMenuItemList(){

        return menuService.getAllMenuItems();
    }

    @PostMapping("api/additem")
    public MenuItem addMenuItem(@RequestParam String name, @RequestParam Double price, @RequestParam String type)
    {
        MenuItem newMenuItem = new MenuItem(name,price,type);
        return menuService.addMenuItem(newMenuItem);
    }
}
