import { NavLink } from '@mantine/core';
import { IconPlus, IconList } from "@tabler/icons-react"
import { useNavigate } from 'react-router-dom';
export const AppNavbar = () => {


    const navigate = useNavigate();
    return (
        <div>


            <NavLink
                onClick={() => navigate('/new')}

                label="Add patient"
                leftSection={<IconPlus size="1rem" stroke={1.5} />}
            />

            <NavLink
                onClick={() => navigate('/patient')}

                label="List patients"
                leftSection={<IconList size="1rem" stroke={1.5} />}
            />
            {/* <NavLink to={'/patient'}>Patient List</NavLink> | <NavLink to={'/new'}>Add new patient</NavLink> */}
        </div>)
}