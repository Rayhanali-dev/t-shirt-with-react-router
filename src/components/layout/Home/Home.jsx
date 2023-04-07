import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const shirtLoad = useLoaderData();

    return (
        <div>
            <h3>This is home components {shirtLoad.length}</h3>
        </div>
    );
};

export default Home;