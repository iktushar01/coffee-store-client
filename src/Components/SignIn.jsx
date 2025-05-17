import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const SignIn = () => {
  const { signInUser } = use(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // firebase sign in send
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const signInInfo = {
          email,
          lastSignInTime: result?.user?.metadata?.lastSignInTime,
        };
        //update last sign in to the database
        fetch('http://localhost:4000/user',{
          method : 'PATCH',
          headers : {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(signInInfo)
        })
        .then(res => res.json())
        .then(data =>{
          console.log('after update patch', data)
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign in now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-         2xl">
          <div className="card-body">
            <form onSubmit={handleSignUp} className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />

              <button className="btn btn-neutral mt-4">sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
