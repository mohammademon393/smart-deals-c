import React from 'react';
import Banner from '../Components/Banner';
import LatestProducts from '../Components/LatestProducts';

const LatestProductsPromise = fetch("http://localhost:3000/latest-products").then(res => res.json());

const Home = () => {
    return (
      <div className="min-h-screen">
        <Banner></Banner>
        
          <LatestProducts
            fallback={<span className="loading loading-dots loading-xl"></span>}
            LatestProductsPromise={LatestProductsPromise}
          ></LatestProducts>
          
      </div>
    );
};

export default Home;