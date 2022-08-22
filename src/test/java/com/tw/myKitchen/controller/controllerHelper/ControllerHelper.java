package com.tw.myKitchen.controller.controllerHelper;

import com.tw.myKitchen.service.UserService;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public abstract class ControllerHelper {
    @MockBean
    protected UserService userService;
    @MockBean
    protected BCryptPasswordEncoder bCryptPasswordEncoder;
}

