import React from 'react';
import Banner from './Banner/Banner';
import Academic from './Academic/Academic';
import TopCollege from './TopCollege/TopCollege';
import Gallery from './Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Academic/>
            <TopCollege/>
            <Gallery/>
        </div>
    );
};

export default Home;