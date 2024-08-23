import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import StakingPass from "../Pages/StakingPass";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<StakingPass />} />
        {/* <Route path="/staking" element={<Staking />} /> */} 
        {/* <Route path="/staking-pass" element={<StakingPass />} /> */}
        {/* <Route path="/admin-form" element={<AdminForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
