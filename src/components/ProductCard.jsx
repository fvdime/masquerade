import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCard = ({ item }) => {
  return (
    <div>
      <Link to={`/product/${item.id}`}>
        <div className="w-full max-w-sm border border-gray-500 rounded-lg shadow">
          <a href="#">
          {item.image && <img
              className="p-4 rounded-t-lg h-80 w-full object-cover"
              src={item.image}
              alt="product image"
            />}
            
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                {item.title}
              </h5>
              <span className="text-gray-500 ">{item.cat}</span>
            </a>
            <div className="flex items-center justify-between mt-5">
              <span className="text-3xl font-bold text-gray-900">
                ${item.price}
              </span>
              <button className="bg-gray-950 px-8 py-2 text-gray-100">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
