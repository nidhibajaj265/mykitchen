package com.tw.myKitchen.service;

import com.tw.myKitchen.model.User;
import com.tw.myKitchen.repository.UserRepository;
import com.tw.myKitchen.service.dto.UserDetailsDTO;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username)
                .map(UserDetailsDTO::create)
                .orElseThrow(()->new UsernameNotFoundException(String.format("No User exists with Username : %s", username)));
    }

    public User save(String name, String email, String password){
        String encodedPassword = bCryptPasswordEncoder.encode(password);
        User user = new User("name","email@example.com", encodedPassword);
        return userRepository.save(user);
    }
}
