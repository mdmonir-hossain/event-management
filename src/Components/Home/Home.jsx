import React, { useContext } from 'react';
import { AuthContext } from '../../Firebase/Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import EventServices from '../EventServices/EventServices';
import Banner from '../Header/Banner/Banner';

const Home = () => {
    const eventData = useLoaderData();
    console.log(eventData);
    return (
      <div>
        <Banner></Banner>
        <h1 className="text-center font-bold text-3xl">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 container mx-auto">
          {eventData.map((event) => (
            <EventServices key={event.id} event={event}></EventServices>
          ))}
        </div>
      </div>
    );
};

export default Home;