import React from "react";
import { useForm } from "react-hook-form";

function forms({ handlesubmitData }) {
  const { register, handleSubmit, reset } = useForm();
  const handleform = (data) => {
    handlesubmitData(data);
    reset();
    return;
  };
  

  return (
    <div className="mt-10">
      <form
        className="flex gap-2"
        onSubmit={handleSubmit(handleform)}
      >
        <input
          {...register("name")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          {...register("email")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Email"
        />
        <input
          {...register("img")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Image URL"
        />
        <input
          className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
          type="submit"
        />
      </form>
    </div>
  );
}

export default forms;
