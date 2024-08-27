import React,{ useState,useEffect } from "react";
import axios from "../utils/axios";

export const Show = () => {
  const [pro, getpro] = useState([]);
  useEffect(() => {
    console.log("Component created");
    getproduct()
    return () => {
      console.log("Component destroyed");
    };
    
  },[]);

  

  const getproduct = () =>
    //request data from link or server
    {
      const api = "/products";

      axios
        .get(api)
        .then((e) => {
          console.log(e);
          getpro(e.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

  //   const addproduct = () =>
  //     //send data from link or server
  //     {
  //       const api = "https:fakestoreapi.com/products";

  //       axios
  //         .post(api, {
  //           title: "test product",
  //           price: 13.5,
  //           description: "lorem ipsum set",
  //           image: "https://i.pravatar.cc",
  //           category: "electronic",
  //         })
  //         .then((e) => {
  //           console.log(e);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     };

  return (
    <>
      {/* <button
        onClick={getproduct}
        className="px-5 py-2 bg-red-300 font-semibold rounded-full m-3"
      >
        CALL API
      </button> */}
      {/* <button
        onClick={addproduct}
        className="px-5 py-2 bg-red-300 font-semibold rounded-full m-3"
      >
        SEND TO API
      </button> */}

      <ul className="px-2 py-2 bg-sky-300 text-sm font-semibold rounded m-3">
        {pro.length > 0
          ? pro.map((e, i) => (
              <li
                key={i}
                className="px-5 py-2 bg-red-300 text-sm font-semibold rounded m-3"
              >
                {e.title}
              </li>
            ))
          : " LOADING..."}
      </ul>
    </>
  );
};
