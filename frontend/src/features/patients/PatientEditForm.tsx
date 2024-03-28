import { useParams } from "react-router-dom"
import { Button, Group, NumberInput, Stack, TextInput } from '@mantine/core';
import { useNavigate    } from 'react-router-dom';
import { PatientFormValues } from "../../types/PatientFormValues";
import { usePatientForm } from "../hooks/usePatientForm";
import { editPatient, } from "../../types/api/patient";
export const PatientEditForm = () => {

    const form = usePatientForm();


    const { id } = useParams();
   

    const handleSubmit=(vals:PatientFormValues)=>{
        console.log(vals);
        editPatient(Number(id),vals);
        }


  // useFetchPatientById(id)
    return <div>

        {/* PatientForm. ID: {id} */}
<form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap={"lg"}>
            <TextInput
                label="First name"
                //  description="Input description"
                placeholder="Input first name"
                style={{ width: '700px' }} 
                {...form.getInputProps('firstname')}
            />
            <TextInput
                label="Last name"
                //  description="Input description"
                placeholder="Input last name"
                style={{ width: '700px' }} 
                {...form.getInputProps('lastname')}
            />
           
            <TextInput
                label="Date of birth"
                //  description="Input description"
                placeholder="Input date of birth"
                style={{ width: '700px' }} 
                {...form.getInputProps('dateOfBirth')}
            />
            <NumberInput
                label="PESEL"
                //  description="Input description"
                placeholder="Input Pesel"
                
                maxLength={11}
                style={{ width: '700px' }} 
                {...form.getInputProps('pesel')}
            />
            <TextInput
                label="City"
                //  description="Input description"
                placeholder="Input city"
                style={{ width: '700px' }} 
                {...form.getInputProps('city')}
            />
            <TextInput
                label="Streat"
                //  description="Input description"
                placeholder="Input streat name"
                style={{ width: '700px' }} 
                {...form.getInputProps('street')}
            />
            <TextInput
                label="Zip Code"
                //  description="Input description"
                placeholder="Input Zip code"
             
                style={{ width: '700px' }} 
                {...form.getInputProps('zip_code')}
            />
            <Button variant="filled" type="submit" size="md" radius="md" style={{ width: '700px' }} >Button</Button>


        </Stack>

        </form>

    </div>
}