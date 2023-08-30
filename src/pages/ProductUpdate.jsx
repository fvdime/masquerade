import axios from "axios"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const ProductUpdate = () => {

  const [product, setProduct] = useState({
    title: "",
    image: "",
    catName: "",
    price: null
  })

  const navigate = useNavigate()
  const location = useLocation()

  const productId = location.pathname.split("/")[3]
  console.log(productId)

  const handleChange = (e) => {
    setProduct((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put("http://localhost:8000/product" + productId, product)
      navigate("/admin")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="max-w-screen-sm mx-auto">
      <form className="my-5">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Title
          </label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
            placeholder="category name..."
            required
          />
        </div>
        {/* <div className="mb-6">
          <label
            for="countries"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Select Category
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
          >
            <option>Shoes</option>
            <option>Makeup</option>
            <option>Bag</option>
            <option>Skirt</option>
          </select>
        </div> */}
        <div className="mb-6">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900"
            name="price"
            onChange={handleChange}
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
        onClick={handleSubmit}
          type="submit"
          className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Create New Product
        </button>
      </form>
    </div>
    </div>
  )
}

export default ProductUpdate