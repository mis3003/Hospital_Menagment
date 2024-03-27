package com.example.demo.patient;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.Period;

@Entity
@Table
public class Patient {
  @Id
            @SequenceGenerator(name="patient_sequence",
            sequenceName ="patiendt_sequence" ,
            allocationSize = 1)
            @GeneratedValue(
                    strategy = GenerationType.SEQUENCE,
                    generator = "patient_sequence"
            )
    Long id;
    String firstname;
    String lastname;
    LocalDate dateOfBirth;
    String PESEL;
    String City;
    String street;
    String zip_code;
    @Transient
private Integer age;

    public Patient() {
    }

    public Patient(Long id, String firstname, String lastname, LocalDate dateOfBirth, String PESEL, String city, String street, String zip_code) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateOfBirth = dateOfBirth;
        this.PESEL = PESEL;
        this.City = city;
        this.street = street;
        this.zip_code = zip_code;
    }

    public Patient(String firstname, String lastname, LocalDate dateOfBirth, String PESEL, String city, String street, String zip_code) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateOfBirth = dateOfBirth;
        this.PESEL = PESEL;
        City = city;
        this.street = street;
        this.zip_code = zip_code;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getPESEL() {
        return PESEL;
    }

    public void setPESEL(String PESEL) {
        this.PESEL = PESEL;
    }

    public String getCity() {
        return City;
    }

    public void setCity(String city) {
        City = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getZip_code() {
        return zip_code;
    }

    public void setZip_code(String zip_code) {
        this.zip_code = zip_code;
    }

    public Integer getAge() {
        return Period.between(this.dateOfBirth,LocalDate.now()).getYears();
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}
