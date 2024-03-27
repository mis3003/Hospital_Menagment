import { FC, memo } from "react";
import { PatientType } from "../../types/PatientType";
import { Card,Text } from "@mantine/core";
export interface PatientListItemProps{
    item:PatientType;
}

export const PatientListItem: FC<PatientListItemProps> = memo(({ item }) => {
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
{/* <Text>
    {item.dateOfBirth}
</Text> */}
<Text>
    {item.PESEL}
</Text>
            
<Text>
    {item.City}
</Text>
<Text>
    {item.street}
</Text>
<Text>
    {item.zip_code}
</Text>
        </Card>
    )
});