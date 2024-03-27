import { useForm } from '@mantine/form';
import { PatientFormValues } from '../../types/PatientFormValues';

export const usePatientForm =()=>{

    const form = useForm<PatientFormValues>({
        initialValues: {
            firstname: '',
            lastname: '',
            dateOfBirth: '',
            PESEL: '',
            City: '',
            street: '',
            zip_code: ''
        },

        validate: {
            firstname: (value) => {
                const firstLetter = value.charAt(0);
                if (firstLetter === firstLetter.toUpperCase()) {
                    return null;
                } else {
                    return 'Firstname should start with an uppercase letter';
                }
            },

            lastname: (value) => {
                const firstLetter = value.charAt(0);
                if (firstLetter === firstLetter.toUpperCase()) {
                    return null;
                } else {
                    return 'Lastname should start with an uppercase letter';
                }
            },
            dateOfBirth: (value) => {
                if (!value) {
                    return 'Date of birth is required';
                }


                if (value instanceof Date && !isNaN(value.getTime())) {
                    return null;
                } else {
                    return 'Invalid date';
                }
            },






        },
    });
    return form;
}