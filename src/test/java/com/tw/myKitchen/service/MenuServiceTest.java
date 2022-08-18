package com.tw.myKitchen.service;

import com.tw.myKitchen.model.MenuItem;
import com.tw.myKitchen.repository.MenuRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class MenuServiceTest {

    @Mock
    MenuRepository menuRepository;

    MenuService menuService;

    @BeforeEach
    void setUp()
    {
        menuService = new MenuService(menuRepository);
    }

    @Test
    void shouldReturnEmptyListWhenMenuIsEmpty(){

        when(menuRepository.findAll()).thenReturn(Collections.emptyList());
        assertEquals(0, menuService.getAllMenuItems().size());

    }

    @Test
    void shouldReturnMenuItemsList(){

        MenuItem idli = new MenuItem(1,"idli",55.7,"Breakfast");
        MenuItem vada = new MenuItem(1,"vada",85.9,"Breakfast");

        List<MenuItem> expectedMenuItemList = Arrays.asList(idli, vada);

        when(menuRepository.findAll()).thenReturn(expectedMenuItemList);

        List<MenuItem> actualMenuItemList = menuService.getAllMenuItems();

        assertEquals(expectedMenuItemList, actualMenuItemList);

        assertEquals(2, menuService.getAllMenuItems().size());



    }



}