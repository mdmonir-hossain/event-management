import Marquee from "react-fast-marquee";

const OurClients = () => {
  return (
    <div className="continer mx-auto">
      <h1 className="text-orange-400 text-3xl font-bold text-center mt-[100px] mb-8">
        Customers Reviews
      </h1>
      <Marquee pauseOnHover={true}>
        <div className="card card-side bg-base-100 lg:mr-4 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/yXF3WdB/wed.jpg" alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mr. AKM - Wedding Client</h2>
            <p className="w-[400px]">
              "I can't express how grateful my wife and I are for the incredible
              job MH EVENT PLANNER did with our wedding. From day one, they
              understood our vision and executed it flawlessly. The attention to
              detail, the stunning decor, and the smooth coordination on the day
              of the event were all exceptional. Thanks to them, our wedding day
              was truly magical!"
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 lg:mr-4 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/fN4Vt1L/baby.jpg" alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Hena - Baby Shower Client</h2>
            <p className="w-[400px]">
              "I couldn't have asked for a better baby shower, thanks to MH
              EVENT PLANNER. They transformed a simple idea into an enchanting
              celebration. Every detail, from the adorable decorations to the
              delicious treats, was perfect. It was a day filled with love and
              joy, and I'm so grateful for their expertise."
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 lg:mr-4 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/qmZ37jv/retirement.jpg" alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">jamsher H. - Retirement Party Client</h2>
            <p className="w-[400px]">
              "My retirement party was an absolute blast, thanks to MH EVENT
              PLANNER. They made sure every moment was special, and the event
              felt like a true reflection of my career and aspirations. I
              couldn't have imagined a better way to start this new chapter in
              my life. Highly recommended!"
            </p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default OurClients;
