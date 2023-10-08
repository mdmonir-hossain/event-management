import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const [error,setError] = useState('');
  const { logIn, user, googleSignin, googleProvider, auth } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(googleSignin);

  const handleGoogleSignin = () => {
    signInWithPopup(auth,googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
}

  const handleLogin = (e) => {
    e.preventDefault();
    const formValue = new FormData(e.currentTarget);
    const email = formValue.get("email");
    const password = formValue.get("password");
    logIn(email, password)
      .then(result => {
        console.log(result.user);
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        setError(error.message);
        if (error) {
          toast("Email or Password does not match.");
        }
      })
    
  }
  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10 mb-10">
        <h1 className="text-center font-bold text-2xl">Please Login</h1>
        <hr />
        <form onSubmit={handleLogin} className="card-body">
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
            <button className="btn btn-primary">Login</button>
            <div className="flex">
              <p>Don't have an account?</p>
              <Link to="/register" className="text-blue-600">
                Register
              </Link>
            </div>
          </div>
        </form>
        <hr />
        <button onClick={handleGoogleSignin} className="btn">
          Google login
        </button>
        {user && <Navigate to="/" replace={true} />}
      </div>
    </div>
  );
};

export default Login;
