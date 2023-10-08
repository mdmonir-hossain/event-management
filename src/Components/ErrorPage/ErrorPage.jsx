import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
      <div >
        <div
          style={{
            backgroundImage: "url(https://i.ibb.co/NWnzFKv/404-page.jpg)",
          }}
          className="hero min-h-screen   bg-white"
        >
          {" "}
          <Link to="/" className="btn text-4xl  btn-primary text-white ">
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