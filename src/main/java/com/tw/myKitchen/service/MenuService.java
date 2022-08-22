package com.tw.myKitchen.service;

import com.tw.myKitchen.model.MenuItem;
import com.tw.myKitchen.repository.MenuRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.List;

@Service
@AllArgsConstructor
public class MenuService {

    @Autowired
    private MenuRepository menuRepository;

    public List<MenuItem> getAllMenuItems()
    {
        return  (List<MenuItem>) menuRepository.findAll();
    }

    public MenuItem addMenuItem(MenuItem newMenuItem) {
        return menuRepository.save(newMenuItem);
    }
}
