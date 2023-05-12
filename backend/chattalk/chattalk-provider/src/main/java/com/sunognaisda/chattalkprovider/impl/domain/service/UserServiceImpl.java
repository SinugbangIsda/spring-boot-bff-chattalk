package com.sunognaisda.chattalkprovider.impl.domain.service;

import com.sunognaisda.chattalkprovider.domain.repository.UserRepository;
import com.sunognaisda.chattalkprovider.domain.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
}
