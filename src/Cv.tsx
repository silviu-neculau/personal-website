import React from "react";

function Cv() {
  return (
    <div>
      <h1 className="sm:indent-16 indent-10 text-4xl sm:text-5xl">
        Neculau Silviu
      </h1>
      <p className="indent-10 text-teal-400">
        Str. Musatini City: Harlau, PostCode: 705100, Phone: 0741997277 Email:
        silviu.mihai.neculau@gmail.com
      </p>
      <br />
      <h2 className="indent-10 text-3xl">Objective</h2>
      <p className="indent-10">In this paragraph i'll talk about... </p>
      <br />
      <h2 className="indent-10 text-3xl">Education</h2>
      <ul className="list-disc list-inside	">
        <p className="indent-10 text-teal-400">2014-2017</p>
        <li className="indent-10">
          School name: Liceul teoretic de informatica "Grigore Moisil"
        </li>
        <p className="indent-10 text-teal-400">2018-2021</p>
        <li className="indent-10">
          University name: Universitatea "Alexandru Ioan Cuza"
        </li>
      </ul>
      <br />
      <h2 className="indent-10 text-3xl">Projects</h2>
      <a href="https://github.com/silviu-neculau/minesweeper-game">
        <p className="indent-10 hover:underline text-teal-600">
          A minesweeper game created in c++.
        </p>
      </a>
      <br />
      <h2 className="indent-10 text-3xl">Experience</h2>
      <p className="indent-10 text-teal-400">1998-2022</p>
      <p className="indent-10">None. </p>
      <br />
    </div>
  );
}
export default Cv;
