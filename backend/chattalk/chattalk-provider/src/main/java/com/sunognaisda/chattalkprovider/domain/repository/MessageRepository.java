package com.sunognaisda.chattalkprovider.domain.repository;

import com.sunognaisda.chattalkprovider.domain.model.Message;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends MongoRepository<Message, String> {
}
