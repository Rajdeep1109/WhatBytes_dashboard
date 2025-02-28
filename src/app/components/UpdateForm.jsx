import React from "react";

const UpdateForm = ({ formData, setFormData, setDisplayForm }) => {
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", formData);
    setDisplayForm(false);  
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 border-1 border-gray-300 p-2 mx-2 w-full rounded-l items-start">
      <label className=" w-full flex justify-between">
        Update rank:
        <input type="number" className="border-1 rounded-l mx-1 " name="rank" value={formData.rank} onChange={handleChange} />
      </label>
      <label className=" w-full flex justify-between">
        Update your percentile:
        <input type="number" name="percentile" className="border-1 rounded-l mx-1" value={formData.percentile} onChange={handleChange} />
      </label >
      <label className=" w-full flex justify-between text-wrap">
        Update your Current Score (Out of 15):
        <input type="number" className="border-1 rounded-l mx-1" name="score" value={formData.score} onChange={handleChange} />
      </label>
      <button type="submit" className="bg-blue-900 h-10 w-20 rounded-xl text-amber-50">
        Update
      </button>
    </form>
  );
};

export default UpdateForm;
