package com.example.demo.patient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("api/patient")
public class PatientController {

    @Autowired
    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    private final PatientService patientService;
    @GetMapping
    public List<Patient> getPatients()
    {
        return patientService.getPatients();
    }

    @GetMapping(path = "/sorted")
    public List<Patient> getPatientsSorted()
    {
        return patientService.getPatientsSorted();
    }

    @GetMapping(path="{patientId}")
    public Patient getPatientById(@PathVariable("patientId") Long id){
    return patientService.getPatientById(id);
    }

    @PostMapping
    public void registerNewPatient(@RequestBody Patient patient)
    {
        patientService.addNewPatient( patient);
    }

    @DeleteMapping(path="{patientId}")
    public void deletePatient(@PathVariable("patientId") Long id)
    {
        patientService.deletePatient(id);
    }

    @PutMapping(path="{patientId}")
    public void updatePatient(
            @PathVariable("patientId") Long patientId,
            @RequestParam() String firstname,
            @RequestParam() String lastname,
            @RequestParam() String city,
            @RequestParam() String streat,
            @RequestParam() String zip_code

    )
    {
        patientService.updatePatient(patientId,firstname,lastname,city,streat,zip_code);
    }
}
