package com.tw.myKitchen.controller;

import com.tw.myKitchen.model.MenuItem;
import com.tw.myKitchen.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MenuController {

    @Autowired
    private MenuService menuService;

    @GetMapping("/api/menu")
    public List<MenuItem> getMenuItemList(){

        return menuService.getAllMenuItems();
    }

    @PostMapping("/api/additem")
    public MenuItem addMenuItem(@RequestBody MenuItem newMenuItem)
    {
        return menuService.addMenuItem(newMenuItem);
    }
}
