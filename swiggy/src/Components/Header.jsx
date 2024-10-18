import React, { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { MdOutlineSearch } from "react-icons/md";
import { IoHelp } from "react-icons/io5";
// import { TbRosetteDiscountCheck } from "react-icons/tb";
// import { IoPerson } from "react-icons/io5";
// import { BsCart2 } from "react-icons/bs";
function Header() {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
  };
  const hideShow = () => {
    setToggle(false);
  };
  const links = [
    { icon: <MdOutlineSearch />, name: "Search" },
    {
      icon: <IoHelp />,
      name: "help",
    },
    {
      icon:"",
      name: "Offers",
      sub:"new"
    },
    {
      icon:"",
      name: "sign in",
    },
    {
      icon: "",
      name: "cart",
      sub:0
    },
  ];
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideShow}
        style={{
          opacity: toggle ? 0.5 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          className="w-[50%] bg-white h-full duration-[400ms] absolute"
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{ left: toggle ? "0%" : "-100%" }}
        ></div>
      </div>
      <header className="p-[15px] shadow-xl">
        <div className="max-w-[1200px] flex items-center mx-auto border border-red-500">
          <div className="w-[100px]">
            <img src="assets/logo1.png" className="w-full" alt="" />
          </div>
          <div className="">
            <span className="font-bold border-black border-b-[2px]">
              Kapilvastu
            </span>{" "}
            Nepal, Lumbini{" "}
            <BsFillCaretDownFill
              onClick={showSideMenu}
              className="inline text-[red]"
            />
          </div>
          <nav className="flex list-none gap-4 ml-auto pr-2 font-semibold    text-[18px]">
            {links.map((link, index) => {
              return (
                <li key={index} className="cursor:pointer flex  hover:text-orange-400 items-center gap-2">
                    {link.icon}
                  {link.name}
                  <sup>{link.sub}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
