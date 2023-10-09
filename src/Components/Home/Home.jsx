import React, { useContext } from 'react';
import { AuthContext } from '../../Firebase/Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import EventServices from '../EventServices/EventServices';
import Banner from '../Header/Banner/Banner';
import OurClients from '../OurClients/OurClients';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    const eventData = useLoaderData();
    console.log(eventData);
    return (
      <div>
        <Banner></Banner>
        <h1 className="text-center font-bold text-3xl text-orange-400 mb-4 mt-[100px]">
          Our Services
        </h1>

        <div
          id="services"
          className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 container mx-auto"
        >
          {eventData.map((event) => (
            <EventServices key={event.id} event={event}></EventServices>
          ))}
        </div>
        <OurClients></OurClients>
        <ContactUs></ContactUs>
      </div>
    );
};

export default Home;