package com.sunognaisda.chattalkprovider.impl.domain.service;

import com.sunognaisda.chattalkprovider.domain.repository.MessageRepository;
import com.sunognaisda.chattalkprovider.domain.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl implements MessageService {
    @Autowired
    private MessageRepository messageRepository;
}
