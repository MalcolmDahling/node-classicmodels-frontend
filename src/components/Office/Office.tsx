import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Office.scss';

export function Office(){

    interface IEmployee{
        employeeNumber:number;
        lastName:string;
        firstName:string;
        extension:string;
        email:string;
        officeCode:number;
        reportsTo:number;
        jobTitle:string;
    }

    let {officeCode} = useParams();

    const [employees, setEmployees] = useState<any>([]);

    useEffect(() => {

        axios.post('http://localhost:3000/contact/employees', {officeCode: officeCode})
            .then(res => {

                setEmployees(

                    res.data.map((employee:IEmployee) => {
                        return(
                            <li key={employee.employeeNumber}>
                                <h2>{employee.firstName} {employee.lastName}</h2>
                                <p>Email: {employee.email}</p>
                                <p>Job title: {employee.jobTitle}</p>
                            </li>
                        )
                    })

                );

            })
            .catch(err => console.log(err));
            

    }, []);
    

    return(
        <>
            <ul>
                {employees}
            </ul>
        </>
    );
}