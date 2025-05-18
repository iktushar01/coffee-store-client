import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  console.log(createUser);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFromData } = Object.fromEntries(
      formData.entries()
    );

    //create user in the firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const userProfile = {
          email,
          ...restFromData,
          creationTime : result?.user?.metadata?.creationTime,
          lastSignInTime : result?.user?.metadata?.lastSignInTime
        };

        //save profile info in the db
        fetch("https://coffiee-store-server-3tfafwnnq-tushars-projects-188d83fb.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after profile save", data);
            if (data.insertedId) {
              alert("wow you are best");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-         2xl">
          <div className="card-body">
            <form onSubmit={handleSignUp} className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
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

              <button className="btn btn-neutral mt-4">sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
