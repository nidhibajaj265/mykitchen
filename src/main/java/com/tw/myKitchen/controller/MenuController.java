package com.tw.myKitchen.controller;

import com.tw.myKitchen.model.MenuItem;
import com.tw.myKitchen.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MenuController {

    @Autowired
    private MenuService menuService;

    @GetMapping("/menu")
    List<MenuItem> getMenuItemList(){

        return menuService.getAllMenuItems();
    }
}
