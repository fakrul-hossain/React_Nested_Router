import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="md:flex justify-between items-center px-10 bg-base-200 py-4">
        <h1 className="text-green-500 text-2xl font-bold">Nested Router</h1>
        <ul className="flex justify-center items-center md:gap-6 gap-3">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/about'>About</Link>
          </li>
          <li>
          <Link to='/contract'>Contract</Link>
          </li>
          <li>
          <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
          <Link to='/team'>Team</Link>
          </li>
          <li>
          <Link to='/posts'>Post</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
