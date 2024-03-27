package com.example.demo.patient;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
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
   Optional<Patient> patinetByPesel=patientRepository.findPatientByPESEL(patient.PESEL);
   if (patinetByPesel.isPresent())
   {
      throw new IllegalStateException("Pesel aleready exist in database");
   }
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


    if(firstname!=null && !firstname.isEmpty() && !Objects.equals(patient.getFirstname(),firstname))
    {
        patient.setFirstname(firstname);
    }

        if(lastname!=null && !lastname.isEmpty() && !Objects.equals(patient.getLastname(),lastname))
        {
            patient.setLastname(lastname);
        }

        if(city!=null && !city.isEmpty() && !Objects.equals(patient.getCity(),city))
        {
            patient.setCity(city);
        }

        if(streat!=null && !streat.isEmpty() && !Objects.equals(patient.getStreet(),streat))
        {
            patient.setStreet(streat);
        }
        if(zipCode!=null && !zipCode.isEmpty() && !Objects.equals(patient.getZip_code(),zipCode))
        {
            patient.setZip_code(zipCode);
        }
    }
}
//  new Patient(1L,"Michał","Bartoszek", LocalDate.of(2000,12,13),"12312414123","Kraków","Reymonta","30-255"));