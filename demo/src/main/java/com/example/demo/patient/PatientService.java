package com.example.demo.patient;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Component
public class PatientService {

    private final PatientRepository patientRepository;

@Autowired
    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public List<Patient> getPatients()
    {

        return patientRepository.findAll();


    }
public void addNewPatient(Patient patient)
{
//   Optional<Patient> patinetByPesel=patientRepository.findPatientBypesel(patient.pesel);
//   if (!patinetByPesel.isPresent())
//   {
//      throw new IllegalStateException("Pesel aleready exist in database");
//   }
   patientRepository.save(patient);
}

    public void deletePatient(Long id) {


    boolean exist=patientRepository.existsById(id);
    if (!exist)
    {
        throw new IllegalStateException("Patient not fount");
    }
    patientRepository.deleteById(id);
    }

    @Transactional
    public void updatePatient(Long patientId,String firstname, String lastname, String city, String streat, String zipCode) {
    Patient patient=patientRepository.findById(patientId).orElseThrow(()->new IllegalStateException("Student not found"));



        patient.setFirstname(firstname);



            patient.setLastname(lastname);



            patient.setCity(city);



            patient.setStreet(streat);

            patient.setZip_code(zipCode);

    }

    public Patient getPatientById(Long id) {
        return patientRepository.findById(id).orElseThrow(()->new IllegalStateException("Student not found"));
    }

    public List<Patient> getPatientsSorted() {
        Sort sortCriteria = Sort.by("lastname");
        return patientRepository.findAll(sortCriteria);
    }
}
//  new Patient(1L,"Michał","Bartoszek", LocalDate.of(2000,12,13),"12312414123","Kraków","Reymonta","30-255"));