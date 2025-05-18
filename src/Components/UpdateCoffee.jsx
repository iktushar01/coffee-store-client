import React from "react";
import { useLoaderData } from "react-router";

const UpdateCoffee = () => {
  const { _id, name, quantity, supplier, taste, category, details, photoURL } =
    useLoaderData();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    //send updated coffee to the database
    fetch(`https://coffiee-store-server-3tfafwnnq-tushars-projects-188d83fb.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedConunt) {
          alert("update complete");
        }
      });
  };
  return (
    <div className="container mx-auto">
      <form onSubmit={handleUpdateCoffee} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm">Name</label>
            <input
              type="text"
              defaultValue={name}
              name="name"
              placeholder="Enter coffee name"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Quantity</label>
            <input
              defaultValue={quantity}
              name="quantity"
              type="text"
              placeholder="Enter coffee Quantity"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Supplier</label>
            <input
              defaultValue={supplier}
              name="supplier"
              type="text"
              placeholder="Enter coffee supplier"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Taste</label>
            <input
              defaultValue={taste}
              name="taste"
              type="text"
              placeholder="Enter coffee taste"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Category</label>
            <input
              defaultValue={category}
              name="category"
              type="text"
              placeholder="Enter coffee category"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Details</label>
            <input
              defaultValue={details}
              name="details"
              type="text"
              placeholder="Enter coffee details"
              className="w-full input input-bordered"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 text-sm">Photo</label>
          <input
            defaultValue={photoURL}
            name="photoURL"
            type="text"
            placeholder="Enter photo URL"
            className="w-full input input-bordered"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#D2B48C] hover:bg-[#c29b74] text-black py-2 px-6 rounded-md w-full"
          >
            Update Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
