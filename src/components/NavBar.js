import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navLinks=links.map((nav,index)=>{
    return <a key={index} href={`#${nav}`}>{nav}</a>
  })
  return <nav>{navLinks}</nav>
  ;
}

export default NavBar;
