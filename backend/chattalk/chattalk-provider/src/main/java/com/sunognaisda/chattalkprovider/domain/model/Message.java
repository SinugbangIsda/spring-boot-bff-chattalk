package com.sunognaisda.chattalkprovider.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "message")
@Data
@AllArgsConstructor
public class Message {
    @Id
    private String id;

    @NotNull
    private String conversation_id;

    @NotNull
    private String sender_id;

    @NotNull
    private String content;

    @NotNull
    private LocalDateTime createdAt;
}
