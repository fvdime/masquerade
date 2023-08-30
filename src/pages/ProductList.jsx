import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const ProductList = () => {
  // const data = [
  //   {
  //     id: 1,
  //     title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
  //     image:
  //       "https://images.unsplash.com/photo-1693202800776-43ab767b63ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  //     cat: "some cat",
  //     price: 299,
  //   },
  //   {
  //     id: 2,
  //     title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
  //     image:
  //       "https://images.unsplash.com/photo-1693202800776-43ab767b63ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  //     cat: "some cat",
  //     price: 299,
  //   },
  //   {
  //     id: 3,
  //     title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
  //     image:
  //       "https://images.unsplash.com/photo-1693202800776-43ab767b63ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  //     cat: "some cat",
  //     price: 299,
  //   },
  //   {
  //     id: 4,
  //     title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
  //     image:
  //       "https://images.unsplash.com/photo-1693202800776-43ab767b63ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  //     cat: "some cat",
  //     price: 299,
  //   },
  //   {
  //     id: 5,
  //     title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
  //     image:
  //       "https://images.unsplash.com/photo-1693202800776-43ab767b63ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  //     cat: "some cat",
  //     price: 299,
  //   },
  //   {
  //     id: 6,
  //     title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
  //     image:
  //       "https://images.unsplash.com/photo-1693202800776-43ab767b63ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  //     cat: "some cat",
  //     price: 299,
  //   },
  //   {
  //     id: 7,
  //     title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
  //     image:
  //       "https://images.unsplash.com/photo-1693202800776-43ab767b63ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  //     cat: "some cat",
  //     price: 299,
  //   },
  //   {
  //     id: 8,
  //     title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
  //     image:
  //       "https://images.unsplash.com/photo-1693202800776-43ab767b63ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  //     cat: "some cat",
  //     price: 299,
  //   },
  // ];

  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get('http://localhost:8000/product')
        setProduct(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllProducts()
  }, [])

  
  const catData = [
    {
      id: 1,
      catName: "mockups",
    },
    {
      id: 2,
      catName: "design",
    },
    {
      id: 3,
      catName: "template",
    },
    {
      id: 4,
      catName: "logo",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto sm:px-5 md:px-5 my-5">
      <form className="my-5">
        <div className="flex">
          <button
            className="relative flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100/50 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-400"
            type="button"
            onClick={() => setOpen(!open)}
          >
            All categories{" "}
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {open && (
            <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-28">
              <ul className="py-2 text-sm text-gray-700">
                {catData.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                    >
                      {item.catName}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="relative w-full">
            <input
              type="search"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50/50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Categories, Products..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-gray-700 rounded-r-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>

      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
        {product.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
