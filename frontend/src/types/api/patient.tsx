import React, { useState, useEffect } from 'react';
import { PatientType } from "../PatientType";
import { PatientFormValues } from "../PatientFormValues";
import { API_URL } from '../../config';
const BASE_API_URL = "http://localhost:8080/api/"

//GET
const Fetch = () => {
  const [posts, setPosts] = useState<PatientType[]>([]);
  console.log(API_URL);
  useEffect(() => {

    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL + '/patient');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const postsData = await response.json();
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchPosts();
  }, []);

  return posts;
};

const FetchSorted = () => {
  const [posts, setPosts] = useState<PatientType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(BASE_API_URL + 'patient');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const postsData = await response.json();
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchPosts();
  }, []);

  return posts;
};





//POST
const addPatient = async (newPatient: PatientFormValues) => {
  try {
    const response = await fetch(BASE_API_URL + 'patient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPatient),
    });
    if (response.ok) {
      console.log('Success ');
    } else {
      console.error('Error ');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

//DELETE
const deletePatient = async (patientID: number) => {
  try {
    const response = await fetch(BASE_API_URL + `patient/${patientID}`, {
      method: 'DELETE',

    });
    if (response.ok) {
      console.log('Succes.');
    } else {
      console.error('Error');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
// patientID:number, newFirstname:string,newlastname:String, City:String,streat:String,zip_code:String

//PUT
const editPatient = async (patientID: number, vals: PatientFormValues) => {
  try {
    const response = await fetch(BASE_API_URL + `patient/${patientID}?firstname=${vals.firstname}&lastname=${vals.lastname}&city=${vals.city}&streat=${vals.street}&zip_code=${vals.zip_code}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },

    });
  }
  catch (error) {
    console.error('Error:', error);
  }
}



export { Fetch, addPatient, deletePatient, editPatient, FetchSorted }


