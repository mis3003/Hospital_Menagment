import { FC, memo } from "react";
import { PatientType } from "../../types/PatientType";
import { Button, Card, Text, Flex } from "@mantine/core";
import { deletePatient } from "../../types/api/patient";
import { useNavigate    } from 'react-router-dom';
export interface PatientListItemProps {
    item: PatientType;
}




export const PatientListItem: FC<PatientListItemProps> = memo(({ item }) => {

    
    const navigate = useNavigate();

    const handleEditClick = () => {
        console.log(item);

        navigate(`/patient/${item.id}`);
    };
    return (
        <Card
            shadow="sm"
        >
            <Text>
                {item.firstname}
            </Text>
            <Text>
                {item.lastname}
            </Text>
            <Text>
                {item.dateOfBirth}
            </Text>

            <Text>
                {item.pesel}
            </Text>

            <Text>
                {item.city}
            </Text>
            <Text>
                {item.street}
            </Text>
            <Text>
                {item.zip_code}
            </Text>


            <Button onClick={()=>{ handleEditClick()}}>Edytuj</Button>


            <Flex
                mih={20}
                wrap="wrap"
            ></Flex>
            <Button  color="red"  onClick={(event) => {console.log(item.id)
            deletePatient(item.id)
            window.location.reload()}}>Usuń</Button>
        </Card>
    )
});