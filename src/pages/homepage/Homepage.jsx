import React from 'react';
import Banner from '../../Components/homepage/Banner';
import Summary from '../../Components/homepage/Summary';
import AllFriends from '../../Components/homepage/AllFriends';

const Homepage = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Summary></Summary>
            <AllFriends></AllFriends>
        </div>
    );
};

export default Homepage;