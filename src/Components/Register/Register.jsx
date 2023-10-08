import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { user } = useContext(AuthContext);
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
    
     if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      toast(
        "Minimum six characters, at least one capital letter and one special character"
      );
      return;
    } 
    setError('');
      register(email, password)
        .then((result) => {
          console.log(result.user);
          setSuccess(result.user);
          if (result.user) {
            toast("User Create successfully");
          }
          updateProfile(result.user, {
            displayName: name,
            photoURL: image,
          })
            .then(() => console.log("Profile updated")
            )
            .catch(error => {
            console.log(error);
          })
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
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10">
        <h1 className="text-center font-bold text-2xl">Please Register</h1>
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
            <div className="flex">
              <p>Already Have an Account?</p>
              <Link to="/login" className="text-blue-600">
                Log in
              </Link>
              <hr />
              
            </div>
          </div>
        </form>
        {user && <Navigate to="/" replace={true} />}
      </div>
    </div>
  );
};

export default Register;
