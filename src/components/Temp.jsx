import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCatagory } from "../store/Api/Catagory";
export default function Counter() { 
  const state = useSelector((state)=>state)
  console.log(state,"state")
  const dispatch = useDispatch();


  return (
    <div>
      <button onClick={() => dispatch(fetchCatagory())}>Fetch Catagory</button>
    </div>
  );
}
