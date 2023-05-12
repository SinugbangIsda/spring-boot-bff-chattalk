package com.sunognaisda.chattalkprovider.domain.repository;

import com.sunognaisda.chattalkprovider.domain.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
}
