import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/product");
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8000/product/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const res = await axios.get("http://localhost:8000/categories");
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllCategories();
  }, []);

  // const handleDelete = async ({id}) => {
  //   try {
  //     const response = await axios.delete(`http://localhost:8000/product/${id}`);
  //     if (response.status === 200) {
  //       setIsDeleted(true);
  //     }
  //   } catch (error) {
  //     console.error('Error deleting item:', error);
  //   }
  // };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="my-5">
        <div>
          <h1 className="font-bold text-3xl text-gray-900 mb-5">Products</h1>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50/50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Category Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            {product.map((item) => (
              <tbody key={item.id}>
                <tr className="bg-white/50 border-b ">
                  <td className="w-32 p-4">
                    {item.image && (
                      <img
                        src={item.image}
                        alt=""
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    )}
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {item.title}
                  </th>
                  <td className="px-6 py-4">{item.catName}</td>
                  <td className="px-6 py-4">${item.price}</td>
                  <td className="flex flex-row items-center justify-center">
                    <Link to={`admin/product/update/${item.id}`}>
                      <button
                        type="button"
                        className="text-gray-700 bg-white/50 border border-lime-300 focus:outline-none hover:bg-lime-100  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-2"
                      >
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(product.id)}
                      type="button"
                      className="text-gray-900 bg-white/50 border border-red-300 focus:outline-none hover:bg-red-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <Link
            to="/admin/product/add"
            className="flex flex-row justify-center items-center self-center my-5"
          >
            <button
              type="button"
              className="text-gray-700 bg-white/50 border border-slate-300 focus:outline-none hover:bg-slate-100  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              Add New Product
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-5">
        <div>
          <h1 className="font-bold text-3xl text-gray-900 mb-5">Categories</h1>
        </div>
        <div className="relative overflow-x-auto">
          {categories.map((item) => (
            <table
              className="w-full text-sm text-left text-gray-500 "
              key={item.id}
            >
              <thead className="text-xs text-gray-700 uppercase bg-gray-50/50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Category name
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/50 border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {item.catName}
                  </th>
                  <td className="flex flex-row">
                    <button
                      type="button"
                      className="text-gray-700 bg-white/50 border border-lime-300 focus:outline-none hover:bg-lime-100  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="text-gray-900 bg-white/50 border border-red-300 focus:outline-none hover:bg-red-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
          <Link
            to="/admin/category/add"
            className="flex flex-row justify-center items-center self-center my-5"
          >
            <button
              type="button"
              className="text-gray-700 bg-white/50 border border-slate-300 focus:outline-none hover:bg-slate-100  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              Add New Category
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
