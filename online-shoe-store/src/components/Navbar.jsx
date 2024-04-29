import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <div>
        <img
          id="logo"
          src="https://png.pngtree.com/png-vector/20220517/ourmid/pngtree-deer-head-silhouette-black-and-white-png-image_4672518.png"
        />
      </div>
      <Link to='/'><button>Home</button></Link>
      <Link><button>Categories</button></Link>
      <Link><button>About Us</button></Link>
    </div>
  );
}
