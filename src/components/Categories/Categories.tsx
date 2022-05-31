import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Categories.scss';

export function Categories(){

    interface ICategory{
        productLine:string;
    }



    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {

        axios.get('http://localhost:3000/cars/categories')
            .then(res => {

                setCategories(
                
                    res.data.map((category:ICategory) => {
                        return(
                            <li key={category.productLine}>
                                <Link to={category.productLine}>{category.productLine}</Link>
                            </li>
                        );
                    })

                );

            });

    }, []);
    

    

    return(
        <>
            <ul>
                {categories}
            </ul>
        </>
    );
}