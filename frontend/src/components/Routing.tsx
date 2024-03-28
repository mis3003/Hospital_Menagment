import { RouteObject, useRoutes } from "react-router-dom";
import { Layout } from "./Layout";
import { PatientList } from "../features/patients/PatientList";
import { PatientForm } from "../features/patients/PatientForm";
import { ErrorPage } from "../features/error/ErrorPage";
import { PatientEditForm } from "../features/patients/PatientEditForm";

const routes: RouteObject[] = [

    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/patient',
                element: <PatientList />
            },
            {
                path: '/new',
                element: <PatientForm />
            },
            {
                path: '/patient/:id',
                element: <PatientEditForm />
            },
            {
                path: '*',
                element: <ErrorPage />
            }
        ]

    }
]
export const Routing = ()=>{
    return useRoutes(routes);
}