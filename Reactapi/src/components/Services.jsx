import React from "react";
import { useEffect } from "react";

export const Services = () => {
  useEffect(() => {
    console.log("Component created");
    return () => {
      console.log("Component destroyed");
    };
  });

  return <>ggg</>;
};
