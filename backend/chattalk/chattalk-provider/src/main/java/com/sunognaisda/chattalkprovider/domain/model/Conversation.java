package com.sunognaisda.chattalkprovider.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.lang.reflect.Array;
import java.time.LocalDateTime;

@Document(collection = "conversation")
@Data
@AllArgsConstructor
public class Conversation {

    @Id
    private String id;

    @NotNull
    private Array participants;

    @NotNull
    private boolean is_deleted;

    @NotNull
    private LocalDateTime created_at;
}
