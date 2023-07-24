import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";



import { FaEyeSlash } from "react-icons/fa";
const Login = () => {
    const handleChange = (event) =>{
        alert(event.target.value);
 
     }
     const handleTogglePassword = () =>{
        setShowPassword(!showPassword);
    }
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-full lg:w-1/2">
            <img
              className=""
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 lg:w-1/2 w-full max-w-sm  ">
            <div className="card-body">
              <h2 className="text-4xl font-semibold text-center">Login </h2>
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    onChange={handleChange}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                  <div className="">
                    <FaEyeSlash
                      onClick={handleTogglePassword}
                      className="absolute -mt-8 ml-[290px]"
                    >
                      {" "}
                      {showPassword ? "Hide" : "Show"}
                    </FaEyeSlash>
                  </div>

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <span className="text-center text-black ">
                Mew To Avanna{" "}
                <Link to="/registration " className="text-red-600">
                  Resister
                </Link>
              </span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
