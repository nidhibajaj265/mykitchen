package com.tw.myKitchen.controller;

import com.tw.myKitchen.model.MenuItem;
import com.tw.myKitchen.service.MenuService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = MenuController.class)
class MenuControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    MenuService menuService;

    @Test
    void shouldReturnMenuItemList() throws Exception {
        MenuItem idli = new MenuItem(1,"idli",55.7,"Breakfast");
        MenuItem vada = new MenuItem(1,"vada",85.9,"Lunch");

        List<MenuItem> expectedMenuItemList = Arrays.asList(idli, vada);

        when(menuService.getAllMenuItems()).thenReturn(expectedMenuItemList);

        mockMvc.perform(get("/menu"))
                .andExpect(jsonPath("$.length()").value(2))
                .andExpect(jsonPath("$[0].name").value("idli"))
                .andExpect(jsonPath("$[0].price").value("55.7"))
                .andExpect(jsonPath("$[0].type").value("Breakfast"))
                .andExpect(jsonPath("$[1].name").value("vada"))
                .andExpect(jsonPath("$[1].price").value("85.9"))
                .andExpect(jsonPath("$[1].type").value("Lunch"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));

        verify(menuService, times(1)).getAllMenuItems();
    }

}