import React from 'react'
import { useForm } from 'react-hook-form';



const RHF = () => {

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">REACT HOOK FORM</h1>

      <form onSubmit={handleSubmit((data)=>{
        console.log(data);
      })} className="w-[520px] bg-white p-8 rounded-lg shadow-md">

        <input {...register("productName")}
          type="text"
          placeholder="Product name"
          className="w-full border border-gray-400 rounded-md p-4 mb-5 text-lg"
        />

        <input {...register("price")}
          type="text"
          placeholder="Price"
          className="w-full border border-gray-400 rounded-md p-4 mb-5 text-lg"
        />

        <input {...register("category")}
          type="text"
          placeholder="Category"
          className="w-full border border-gray-400 rounded-md p-4 mb-5 text-lg"
        />

        <input {...register("image")}
          type="text"
          placeholder="Image"
          className="w-full border border-gray-400 rounded-md p-4 mb-5 text-lg"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-md text-xl font-semibold"
        >
          CREATE
        </button>

      </form>
    </div>
  );
};

export default RHF;

