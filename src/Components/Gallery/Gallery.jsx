

const Gallery = () => {
    return (
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-8 mb-8 gap-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/SBHLqnL/birthday.jpg" alt="Shoes" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/CQgw1K1/wedding.jpg" alt="Shoes" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/mGNpwV4/anniversaries.jpg" alt="Shoes" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/kXZWjMK/engaged.jpg" alt="Shoes" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/bNGDJJX/retirement.jpg" alt="Shoes" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/92TSpc7/baby-shower.jpg" alt="Shoes" />
          </figure>
        </div>
      </div>
    );
};

export default Gallery;