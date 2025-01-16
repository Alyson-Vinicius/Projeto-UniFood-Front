import React from "react";
import LogoMobile from "../../../src/assets/LogoMobile.svg";
// import { NavbarMenu } from "../../mockData/Data";
import  Shoppingcart  from "../../assets/Shoppingcart.svg";
import  menu  from "../../assets/menu.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8 ">

          {/* icon section - sidebar */}
          <div>
          <button className="text-2xl gap-2 mx-5  hover:bg-primary  hover:text-white rounded-full p-2 duration-200">
              <img src={menu} alt="menu" />
            </button>
          </div>

          {/* Logo section */}
          <div className=" flex items-center gap-2  py-8">
            <img src={LogoMobile} alt="Logo" className="size-20" />
          </div>
          {/* Menu section - Caso tenha a verção web*/}
          {/* <div className="hidden md:block">
            <ul className=" flex items-center gap-6 text-gray-600 ">
              {
                NAvbarMenu.map((item) => {
                  return (
                    <li key={item.id} >
                      <a href={item.link} className="
                      inline-block py-1 px-3 hover:text-primary font-semibold" >{item.title} </a>
                    </li> 
                  )
                })
              }
            </ul>
          </div> */}
          {/* Icon section - carrinho */}
          <div>

            <button className="text-2xl gap-2 mx-5  hover:bg-primary  hover:text-white rounded-full p-2 duration-200">
             <img src={Shoppingcart} alt="" />
            </button>

          </div>
          {/* Mobile hamburger Menu section */}
        </div>

        {/* Mobile Sidebar section */}
      </nav>
    </>
  );
};

export default Navbar;
