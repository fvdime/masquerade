import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryAdd = () => {
  const [catName, setCatName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/categories", {
        catName,
      });
      console.log("Category created:", response.data);
      navigate("/admin");
    } catch (error) {
      console.error("Category creation failed:", error.response.data.error);
    }
  };

  return (
    <div>
      <div className="max-w-screen-sm mx-auto">
        <div className="my-5">
          <h1 className="font-semibold text-3xl text-gray-900 mb-5">
            Add New Category
          </h1>
        </div>
        <form className="my-5" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Category Name
            </label>
            <input
              type="text"
              name="catName"
              onChange={(e) => setCatName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
              placeholder="category name..."
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Create New Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CategoryAdd;
