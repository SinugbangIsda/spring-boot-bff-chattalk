package com.sunognaisda.chattalkprovider.domain.repository;

import com.sunognaisda.chattalkprovider.domain.model.Conversation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConversationRepository extends MongoRepository<Conversation, String> {
}
