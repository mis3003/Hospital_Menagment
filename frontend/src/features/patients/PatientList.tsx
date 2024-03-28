import { SimpleGrid, Button } from "@mantine/core";
import React, { useState, useEffect } from 'react';
import { PatientType, } from "../../types/PatientType";
import { PatientListItem, } from "./PatientListItem";

const BASE_API_URL = "http://localhost:8080/api/"




// const [patientData, setPatientData] = useState<PatientType[]>([]); // Initialize with correct type



export const PatientList = () => {

  const [data, setData] = useState<PatientType[]>([]);
  const [posts, setPosts] = useState<PatientType[]>([]);
  const [bolean, setBolean] = useState<Boolean>(false);

  const handleSortClick = (nie_data: PatientType[]) => {
    const sortedData = [...data]; 
    sortedData.sort((a, b) => {
      if (a.lastname < b.lastname) return -1;
      if (a.lastname > b.lastname) return 1;
      return 0;
    });

    setBolean(true);
    setData(sortedData); 
    setData(sortedData); 
    setData(sortedData); 
    
    };
 useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(BASE_API_URL + 'patient');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const postsData: PatientType[] = await response.json();
        setData(postsData); // Set fetched data to data state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (!bolean) {
      fetchData();
    }
  }, [data, bolean]);



  console.log(bolean)

  console.log(data)



  return (
    <div>
      <Button onClick={(event) => { handleSortClick(data) }}>Sort (Please push twice)</Button>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
        {data.map((item) => <PatientListItem key={item.id} item={item} />)}
      </SimpleGrid>
    </div>
  );
};


  



 
