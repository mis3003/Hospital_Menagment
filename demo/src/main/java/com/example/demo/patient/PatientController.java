package com.example.demo.patient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
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
            @RequestParam(required = false) String firstname,
            @RequestParam(required = false) String lastname,
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String streat,
            @RequestParam(required = false) String zip_code

    )
    {
        patientService.updatePatient(patientId,firstname,lastname,city,streat,zip_code);
    }
}
