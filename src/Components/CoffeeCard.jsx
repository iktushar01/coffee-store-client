import React from "react";
import { Link } from "react-router";

const CoffeeCard = ({ coffee , coffees ,setCoffees }) => {
  const { _id, name, photoURL } = coffee;

  const handleDelete = () => {
    console.log(_id);
    fetch(`http://localhost:4000/coffees/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("wow you done a imposible !");
        }
      });
      // remove the coffee form the state
      const remainingCoffees = coffees.filter(cof => cof._id !== _id);
      setCoffees(remainingCoffees)
  };
  return (
    <div className="container mx-auto">
      <div className=" card card-side bg-base-100 shadow-sm">
        <figure>
          <img src={photoURL} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <div className="join join-vertical">
              <button className="btn join-item">view</button>
              <Link to={`/updateCoffee/${_id}`}>
                <button className="btn join-item">edit</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item"
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
