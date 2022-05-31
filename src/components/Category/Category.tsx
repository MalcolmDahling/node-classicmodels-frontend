import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Category.scss';

export function Category(){

    interface IProduct{
        productCode:string;
        productName:string;
        productLine:string;
        productScale:string;
        productVendor:string;
        productDescription:string;
        quantityInStock:number;
        buyPrice:number;
        MSRP:number;
    }

    let {category} = useParams();

    const [products, setProducts] = useState<any>([]);

    useEffect(() => {

        axios.post('http://localhost:3000/cars/category', {category: category})
            .then((res) => {

                setProducts(

                    res.data.map((product:IProduct) => {
                        return(
                            <li key={product.productCode}>
                                <h2>{product.productName}</h2>
                                <p>Product Code: {product.productCode}</p>
                                <p>Category: {product.productLine}</p>
                                <p>Vendor: {product.productVendor}</p>
                                <p>Description: {product.productDescription}</p>
                                <p>Stock: {product.quantityInStock}</p>
                                <p>Price: {product.buyPrice}</p>
                                <p>MSRP: {product.MSRP}</p>
                            </li>
                        );
                    })
                );

            })
            .catch(err => console.log(err));
            

    }, []);

    return(
        <>
            <ul>
                {products}
            </ul>
        </>
    );
}