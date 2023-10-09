import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
      <div>
        <div
          style={{
            backgroundImage: "url(https://i.ibb.co/NWnzFKv/404-page.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize:'100%'
          }}
          className="hero min-h-screen   bg-white"
        >
          {" "}
          <Link to="/" className="btn text-4xl  bg-orange-400 text-white mt-[200px] mr-20">
            Go to Home
          </Link>
          <div className="hero-content text-center ">
            <div className="max-w-md"></div>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;