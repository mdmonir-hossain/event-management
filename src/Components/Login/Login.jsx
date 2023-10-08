import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Firebase/Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [error,setError] = useState('');
  const { logIn,user } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const formValue = new FormData(e.currentTarget);
    const email = formValue.get("email");
    const password = formValue.get("password");
    logIn(email, password)
      .then(result => {
      console.log(result.user);
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
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>Don't have an account?</p>
              <Link to="/register" className="text-blue-600">
                Register
              </Link>
            </form>
            {user && <Navigate to="/" replace={true} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
