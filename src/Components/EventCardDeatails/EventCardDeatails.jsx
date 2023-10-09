import { useLoaderData, useParams } from "react-router-dom";
import ShowDetailsCard from "./ShowDetailsCard";
import { useEffect, useState } from "react";


const EventCardDetails = () => {
    const { id } = useParams();
    const eventDetails = useLoaderData();
    const [eventcards, setEventcards] = useState([]);

    useEffect(() => {
        const cardDetails = eventDetails.find((card) => card.id === id);
        setEventcards(cardDetails);
        
    }, [eventDetails, id]);

    console.log(eventcards);
    return (
      <div className="flex justify-center mt-4 mb-4 w-full">
        <ShowDetailsCard eventcards={eventcards}></ShowDetailsCard>
      </div>
    );
};

export default EventCardDetails;