import { SimpleGrid,Button } from "@mantine/core";
import React from 'react';
import { PatientType } from "../../types/PatientType";
import { PatientListItem,  } from "./PatientListItem";
import {Fetch,FetchSorted} from "../../types/api/patient";
const BASE_API_URL = "http://localhost:8080/api/"

function useForceUpdate() {
  const [, setTick] = React.useState(0);
  const update = React.useCallback(() => {
      setTick(tick => tick + 1);
  }, []);
  return update;
}

let data: PatientType[] = [];


const handleSortClick = () => {
  console.log("AAAAAAA")
  data.sort((a, b) => {
  if (a.lastname < b.lastname) return -1;
  if (a.lastname > b.lastname) return 1;
  console.log(data)
  return 0;
});}

export const PatientList = () => {
  const forceUpdate = useForceUpdate();

  data = Fetch();
console.log(data)



  return (
    <div>
      <Button onClick={(event)=>{ handleSortClick()}}>Sort</Button>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
        {data.map((item) => <PatientListItem key={item.id} item={item} />)}
      </SimpleGrid>
    </div>
  );
};