import React from 'react';

const AddCoffee = () => {
    const handleAddCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee);

        // send data to the database
        fetch('https://coffiee-store-server-3tfafwnnq-tushars-projects-188d83fb.vercel.app/coffees', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log( 'after adding coffee to db', data)
            if(data.insertedId){
                alert('added successfully')
            }
        })
    }
    
    return (
        <div className="container mx-auto bg-[#F4F3F0] p-6 md:p-10 rounded-md mt-10">
            <h1 className="text-3xl text-center font-bold mb-4">Add New Coffee</h1>
            <p className="text-center mb-8 text-sm text-gray-600 max-w-2xl mx-auto">
                It is a long established fact that a reader will be distracted by the readable content of a page
                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using Content here.
            </p>
            <form onSubmit={handleAddCoffee} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-1 text-sm">Name</label>
                        <input type="text" name='name' placeholder="Enter coffee name" className="w-full input input-bordered" />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm">Quantity</label>
                        <input name='quantity' type="text" placeholder="Enter coffee Quantity" className="w-full input input-bordered" />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm">Supplier</label>
                        <input name='supplier' type="text" placeholder="Enter coffee supplier" className="w-full input input-bordered" />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm">Taste</label>
                        <input name='taste' type="text" placeholder="Enter coffee taste" className="w-full input input-bordered" />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm">Category</label>
                        <input name='category' type="text" placeholder="Enter coffee category" className="w-full input input-bordered" />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm">Details</label>
                        <input name='details' type="text" placeholder="Enter coffee details" className="w-full input input-bordered" />
                    </div>
                </div>
                <div>
                    <label className="block mb-1 text-sm">Photo</label>
                    <input name='photoURL' type="text" placeholder="Enter photo URL" className="w-full input input-bordered" />
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-[#D2B48C] hover:bg-[#c29b74] text-black py-2 px-6 rounded-md w-full"
                    >
                        Add Coffee
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;
