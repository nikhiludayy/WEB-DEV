import React from "react";
import { useContext } from "react";
import { ProductContext } from "../utilis/context";
import { Link, useNavigate, useParams } from "react-router-dom";
const Details = () => {
  const [products] = useContext(ProductContext);
  const { id } = useParams();
  const nxt=id;
  console.log(nxt);
  console.log(id);
  const navigate = useNavigate();
  return (
    <div className="w-full h-full relative flex items-center justify-center p-52 gap-10">
      <div className="absolute left-40 top-20 flex gap-3"><button
        onClick={() => navigate(-1)}
        className="px-3 py-2 bg-blue-400 rounded-md font-semibold"
      >
        GoBack
      </button>
      <button
        onClick={() => (1)}
        className="px-2 py-1 bg-blue-400 rounded-md "
      >
        Next
      </button><button
        onClick={() => navigate(-1)}
        className="px-2 py-1 bg-blue-400 rounded-md "
      >
        prev
      </button></div>
      {products
        .filter((pro) => {
            
          return pro.id == id;
        })
        .map((product) => {
          return (
            <div key={product.id} className="ml-20 flex items-center justify-center p-5 gap-20">
              <div className="img w-[30%] hover:scale-125 transition-all mix-blend-multiply">
                <img
                  className="object-fit w-full h-full"
                  src={product.image}
                  alt={product.image}
                />
              </div>
              <div className="content w-8/12 bg-e flex flex-col gap-2">
                <h1 className="text-4xl font-semibold">{product.title}</h1>
                <h3 className="text-gray-400">{product.category.toUpperCase()}</h3>
                <h2 className="text-2xl font-semibold">${product.price}</h2>
                <p className="text-xs font-semibold">{product.description}</p>
                <div className="w-full h-7 mt-2 flex gap-4 text-sm font-semibold">
                  <Link className="py-1 px-3  hover:scale-125 transition-all border rounded-md border-blue-300 text-blue-400">
                    Edit
                  </Link>
                  <Link className="py-1 px-3 hover:scale-125 transition-all border rounded-md border-red-300 text-red-400">
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        
    </div>
  );
};

export default Details;
