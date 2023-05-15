package com.sunognaisda.chattalkprovider;

import org.apache.dubbo.config.spring.context.annotation.EnableDubbo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableDubbo
public class ChattalkProviderApplication {
    public static void main(String[] args) {
        SpringApplication.run(ChattalkProviderApplication.class, args);
    }
}
