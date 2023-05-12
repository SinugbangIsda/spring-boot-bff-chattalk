package com.sunognaisda.chattalkprovider.impl.domain.service;

import com.sunognaisda.chattalkprovider.domain.repository.ConversationRepository;
import com.sunognaisda.chattalkprovider.domain.service.ConversationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConversationServiceImpl implements ConversationService {
    @Autowired
    private ConversationRepository conversationRepository;
}
