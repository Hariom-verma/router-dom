import React from "react";
import Home from "./component/Home";
import Services from "./component/Services";
import Product from "./component/Product";
import About from "./component/About";
import Nav from "./component/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import Productchild from "./component/Productchild";
import Aboutchild from "./component/Aboutchild";
import Servicechild from "./component/Servicechild";
import Noidea from "./component/Noidea";

const App = () => {

 

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          {" "}
          <Route path="/about/aboutchild" element={<Aboutchild />} />{" "}
          <Route path="/about/noidea" element={<Noidea />} />
        </Route>

        <Route path="/product" element={<Product />}>
          <Route path="/product/:producttype" element={<Productchild />} />
        </Route>
        <Route path="/services" element={<Services />}>
          <Route path="/services/serviceschild" element={<Servicechild />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
