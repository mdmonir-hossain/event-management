import React, { useContext } from 'react';
import { AuthContext } from '../../Firebase/Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import EventServices from '../EventServices/EventServices';

const Home = () => {
    const eventData = useLoaderData();
    console.log(eventData);
    return (
      <div>
        <h1 className="text-center font-bold text-3xl">Our Services</h1>
        <div className="grid grid-cols-3 container mx-auto">
          {eventData.map((event) => (
            <EventServices key={event.id} event={event}></EventServices>
          ))}
        </div>
      </div>
    );
};

export default Home;