import { SimpleGrid } from "@mantine/core";
import { FC, memo } from "react";
import { useSearchParams } from "react-router-dom";
import { PatientType } from "../../types/PatientType";
import { PatientListItem, PatientListItemProps } from "./PatientListItem";

const data: PatientType[] = [
    {
        "id": 1,
        "firstname": "Michał",
        "lastname": "Bartoszek",
        "dateOfBirth": "2000-12-13",
        "street": "Reymonta",
        "zip_code": "30-255",
        "City": "Kraków",
        "PESEL": "12312414123"
    },

    {
        "id": 1,
        "firstname": "Michał",
        "lastname": "Bartoszek",
        "dateOfBirth": "2000-12-13",
        "street": "Reymonta",
        "zip_code": "30-255",
        "City": "Kraków",
        "PESEL": "12312414123"
    },
    {
        "id": 1,
        "firstname": "Michał",
        "lastname": "Bartoszek",
        "dateOfBirth": "2000-12-13",
        "street": "Reymonta",
        "zip_code": "30-255",
        "City": "Kraków",
        "PESEL": "12312414123"
    },
    {
        "id": 1,
        "firstname": "Michał",
        "lastname": "Bartoszek",
        "dateOfBirth": "2000-12-13",
        "street": "Reymonta",
        "zip_code": "30-255",
        "City": "Kraków",
        "PESEL": "12312414123"
    },{
        "id": 1,
        "firstname": "Michał",
        "lastname": "Bartoszek",
        "dateOfBirth": "2000-12-13",
        "street": "Reymonta",
        "zip_code": "30-255",
        "City": "Kraków",
        "PESEL": "12312414123"
    },{
        "id": 1,
        "firstname": "Michał",
        "lastname": "Bartoszek",
        "dateOfBirth": "2000-12-13",
        "street": "Reymonta",
        "zip_code": "30-255",
        "City": "Kraków",
        "PESEL": "12312414123"
    },
];

export const PatientList = () => {
    return (
        <div>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
                {data.map((item) => <PatientListItem key={item.id} item={item} />)}
            </SimpleGrid>
        </div>
    );
};