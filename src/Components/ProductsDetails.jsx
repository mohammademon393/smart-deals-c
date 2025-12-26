import React from 'react';
import { useLoaderData } from 'react-router';

const ProductsDetails = () => {
    const product = useLoaderData();
    console.log(product);
    
    return (
        <div>
        <h1 className="text-primary text-4xl font-bold text-center ">Products Details Page</h1>
        </div>
    );
};

export default ProductsDetails;