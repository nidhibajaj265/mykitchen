package com.tw.myKitchen.repository;

import com.tw.myKitchen.model.MenuItem;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace.NONE;

@AutoConfigureTestDatabase(replace = NONE)
@DataJpaTest
//@Transactional
class MenuRepositoryTest {

    @Autowired
    MenuRepository menuRepository;

    @Test
    void shouldReturnMenuItemWithGivenName()
    {
        MenuItem menuItem = new MenuItem("Item",55.6,"Breakfast");
        MenuItem expectedMenuItem = menuRepository.save(menuItem);

        Optional<MenuItem> actualMenuItemOptional = menuRepository.findByName("Item");

        assertTrue(actualMenuItemOptional.isPresent());
        MenuItem actualMenuItem = actualMenuItemOptional.get();

        assertEquals(expectedMenuItem, actualMenuItem);
    }

    @Test
    void shouldNotReturnItemWhenTheGivenItemIsNotSaved()
    {
        MenuItem menuItem = new MenuItem("Item",55.6,"Breakfast");
        menuRepository.save(menuItem);

        Optional<MenuItem> menuItemOptional = menuRepository.findByName("Another Item");

        assertFalse(menuItemOptional.isPresent());
    }



}