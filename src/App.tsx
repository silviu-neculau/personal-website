import React from "react";
import image from "./img/image.png";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Cv from "./Cv";
import Home from "./Home";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-400`;

  return (
    <BrowserRouter>
      <div className="grid grid-cols-9 h-full">
        <div className="col-span-9 sm:col-span-2 bg-slate-300 ">
          <button
            className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
          <ul className="sm:flex hidden ">
            <li className="flex-1 sm:mr-2 sm:ml-2">
              <Link
                to="/home"
                className="text-center block border rounded bg-blue-400 text-white"
              >
                Home
              </Link>
            </li>
            <li className="flex-1 sm:mr-2  ">
              <Link
                to="/cv"
                className="text-center block border rounded  bg-blue-400  text-white"
              >
                Cv
              </Link>
            </li>
          </ul>
          <div className="font-mono sm:text-2xl">Neculau Silviu</div>
          <img className="w-full h-96 sm:h-auto scale-75" src={image} />
        </div>
        <div className="col-span-7">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="cv" element={<Cv />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
