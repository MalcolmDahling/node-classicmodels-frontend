import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';

export function Contact(){

    interface IOffice{
        officeCode:number;
        city:string;
        phone:string;
        addressLine1:string;
        addressLine2:string;
        state:string;
        country:string;
        postalCode:string;
        territory:string;
    }

    const [offices, setOffices] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:3000/contact')
        .then(res => {

            setOffices(

                res.data.map((office:IOffice) =>{
                    return(
                        <li key={office.officeCode}>
                            <Link to={office.officeCode.toString()}><h1>{office.city}</h1></Link>
                            <p>Phone: {office.phone}</p>
                            <p>Address 1: {office.addressLine1}</p>
                            <p>Address 2: {office.addressLine2}</p>
                            <p>State: {office.state}</p>
                            <p>Country: {office.country}</p>
                            <p>Postal code: {office.postalCode}</p>
                            <p>Territory: {office.territory}</p> 
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
                {offices}
            </ul>
        </>
    );
}