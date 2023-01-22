import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Videos from "../pages/Videos";
import Container from "./Container";
const Links =()=>{
    return(
     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/video/:id" element={<Videos/>}/>
     </Routes>
    )
}
export default Links