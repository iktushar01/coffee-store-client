import React, { useState } from "react";
import { useLoaderData } from "react-router";

const User = () => {
  const initialUser = useLoaderData();
  const [user, setUser] = useState(initialUser);

  const handleDelete = (id) =>{
    fetch(`https://coffiee-store-server-3tfafwnnq-tushars-projects-188d83fb.vercel.app/user/${id}`,{
        method : 'DELETE',

    })
    .then(res => res.json())
    .then(data =>{
        console.log('after delete', data)
        if(data.deletedCount){
            alert('guya mara sara')
            const remainingUsers = user.filter(use => use._id !== id);
            setUser(remainingUsers)

            //todo delete user form firebase
        }
    })
  }
  return (
    <div>
      <h2 className="text-3xl">Users : {user.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {user.map((use, index) => (
              <tr key={use._id}>
                <th>{index + 1}</th>
                <td>{use.name}</td>
                <td> {use.email}</td>
                <td>Purple</td>
                <th>
                  <div className="flex gap-4">
                    <button className="btn btn-ghost btn-xs">details</button>
                    <button className="btn btn-ghost btn-xs">Edit</button>
                    <button onClick={()=>handleDelete(use._id)} className="btn  btn-xs bg-red-500">Delete</button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
