import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Firebase/Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState("");
  const { register } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const formValue = new FormData(e.currentTarget);
    const name = formValue.get("name");
    const image = formValue.get("image");
    const email = formValue.get("email");
    const password = formValue.get("password");
    register(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(result.user);
        if (result.user) {
           toast("User Create successfully");
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
    if (error) {
      toast(error);
    };
  
}
  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="w-full lg:w-1/2 mx-auto shadow-lg mt-6 ">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              name="image"
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
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <p>Already Have an Account?</p>
          <Link to="/login" className="text-blue-600">
            Log in
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
