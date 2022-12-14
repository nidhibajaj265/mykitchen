package com.tw.myKitchen.repository;

import com.tw.myKitchen.model.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MenuRepository extends JpaRepository<MenuItem, Long> {

    Optional<MenuItem> findByName(String name);
    List<MenuItem> findByType(String type);
}
