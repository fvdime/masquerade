import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductAdd = () => {
  const [title, setTitle] = useState("");
  const [catName, setCatName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/product", {
        title,
        catName,
        price,
        image,
      });
      console.log("Product created:", response.data);
      navigate("/admin");
    } catch (error) {
      console.error("Product creation failed:", error.response.data.error);
    }
  };

  return (
    <div>
      <div className="max-w-screen-sm mx-auto">
        <div className="my-5">
          <h1 className="font-semibold text-3xl text-gray-900 mb-5">
            Add New Product
          </h1>
        </div>
        <form className="my-5" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Title
            </label>
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
              placeholder="title..."
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Image
            </label>
            <input
              type="text"
              name="image"
              onChange={(e) => setImage(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
              placeholder="image url..."
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Category Name
            </label>
            <input
              name="catName"
              onChange={(e) => setCatName(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
              placeholder="category name..."
              required
            />
          </div>
          {/* <div className="mb-6">
          <label
            htmlFor="categories"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Select Category
          </label>
          <select
            name="categories"
            onChange={(e) => setCategories(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
          >
            {categories.map((item) => (
            <option key={item.id}>{item.catName}</option>
            ))}
          </select>
        </div> */}
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            >
              Price
            </label>
            <div className="flex flex-row">
              <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-grey-darker">
                $
              </span>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
              />
            </div>
            {/* <div className="my-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2.5"
              type="file"
            />
          </div> */}
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

export default ProductAdd;
