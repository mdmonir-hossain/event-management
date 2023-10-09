const ContactUs = () => {
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div data-aos="fade-left" className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-orange-400">
                Contract Us
              </h1>
              <p className="py-6">
                "Turning Your Vision into Unforgettable Events!{" "}
              </p>
              <p className="py-6">
                🌟🎉 Welcome to MH EVENT PLANNER, where we specialize in
                creating extraordinary events that leave lasting impressions.
                Our team of seasoned planners is here to turn your dreams into
                reality, one detail at a time.{" "}
              </p>

              <p className="py-6">Why Choose Us? ✨ </p>
              <p>
                <ul>
                  <li>
                    ✨ Personalized Excellence: We tailor every event to match
                    your unique vision, style, and objectives.
                  </li>
                  <li>
                    ✨ Stress-Free Planning: Leave the logistics to us while you
                    enjoy the event without any worries.
                  </li>
                  <li>
                    ✨ Attention to Detail: From stunning decor and
                    entertainment to flawless execution, we ensure every aspect
                    is impeccable.
                  </li>
                  <li>
                    ✨ Memorable Experiences: Our mission is to create events
                    that you and your guests will cherish for a lifetime.
                    Whether it's a wedding, corporate gathering, milestone
                    celebration, or any special occasion, we're committed to
                    making it an extraordinary experience.
                  </li>
                  <li></li>
                  <li></li>
                </ul>
                Let us handle the planning, so you can focus on savoring every
                moment. Contact us today to begin the journey towards your dream
                event!" "Ready to make your event unforgettable? Contact us now
                to schedule a complimentary consultation, and let's start
                crafting an exceptional experience that exceeds your
                expectations.`"
              </p>
            </div>
            <div
              data-aos="fade-right"
              className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            >
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-orange-400 text-white">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactUs;