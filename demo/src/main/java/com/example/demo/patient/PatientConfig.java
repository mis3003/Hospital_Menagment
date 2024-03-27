package com.example.demo.patient;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;

@Configuration
public class PatientConfig {
    @Bean
    CommandLineRunner commandLineRunner(PatientRepository repository){
        return args->{
          Patient ja=  new Patient("Michał","Bartoszek", LocalDate.of(2000,12,13),"12312414123","Kraków","Reymonta","30-255");

          repository.save(ja);
        };


    }
}
