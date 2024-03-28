import { useForm } from '@mantine/form';
import { PatientFormValues } from '../../types/PatientFormValues';

export const usePatientForm =()=>{

    const form = useForm<PatientFormValues>({
        initialValues: {
            firstname: '',
            lastname: '',
            dateOfBirth: '',
            pesel: '',
            city: '',
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
            dateOfBirth:  (value) => {
               
                if (!value) {
                    return 'Data urodzenia jest wymagana';
                }
            
                
                const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
                if (!dateRegex.test(value)) {
                    return 'Nieprawidłowy format daty. Poprawny format to YYYY-MM-DD';
                }
            
               
                const parts = value.split('-');
                const year = parseInt(parts[0], 10);
                const month = parseInt(parts[1], 10) - 1; 
                const day = parseInt(parts[2], 10);
                const date = new Date(year, month, day);
            
                if (
                    date.getFullYear() !== year ||
                    date.getMonth() !== month ||
                    date.getDate() !== day
                ) {
                    return 'Invalid date';
                }
            
               
                return null;
            },






        },
    });
    return form;
}