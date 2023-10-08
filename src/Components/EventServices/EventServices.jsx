
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const EventServices = ({ event }) => {
    useEffect(() => {
        AOS.init();
    },[])
    const { id, name,image,short_description } = event;
    return (
      <div>
        <div
          
          className="card w-96 bg-base-100 shadow-xl"
          data-aos="fade-right"
        >
          <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{short_description}</p>
            <div className="card-actions">
              <Link to={`/services/${id}`}>
                <button className="btn btn-primary">Show Detials</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default EventServices;