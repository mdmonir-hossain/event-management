import { Link } from "react-router-dom";


const ShowDetailsCard = ({ eventcards }) => {
  const { id, name, image, price, short_description } = eventcards;

  return (
    <div>
      <div
        className="card w-full bg-base-100 shadow-xl border-b-[15px] border-t-[15px] border-orange-400 rounded-xl"
        data-aos="fade-right"
      >
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="card-title">Price: $ {price}</p>
          <p>{short_description}</p>
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

export default ShowDetailsCard;