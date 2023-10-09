
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const EventServices = ({ event }) => {
    useEffect(() => {
        AOS.init();
    },[])
    const { id, name,image,price,short_description } = event;
    return (
      <div>
        <div
          className="card w-96 bg-base-100 shadow-xl border-b-[15px] border-t-[15px] border-orange-400 rounded-xl"
          data-aos="fade-right"
        >
          <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p className="card-title">Price: $ {price}</p>
            <p>Booking Our Event Package</p>
            <div className="card-actions">
              <Link to={`/services/${id}`}>
                <button className="btn text-white hover:text-black bg-orange-400">
                  Show Detials
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default EventServices;