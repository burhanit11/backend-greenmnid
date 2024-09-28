"use client";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import {
  // Link,
  // Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddCarts from "../addCarts/AddCarts";
import Adduser from "../addUser/Adduser";
const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      // Adjust this value as needed
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const cart = useSelector((state) => state.cart.items);
  const navigation = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const toggleUser = () => {
    setIsUserOpen(!isUserOpen);
  };

  return (
    <div className="">
      <header
        // className="relative w-full  bg-white "
        className={`${
          isScrolled ? " shadow-lg bg-primary top-0 " : "bg-white "
        }   fixed w-full z-10 animate__animated animate__slideInDown `}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 ">
          <div className="inline-flex items-center space-x-6 gap-16 py-4">
            <span className="text-lg font-bold">Greenmind</span>
            <div className="hidden lg:block ">
              <ul className="inline-flex space-x-8">
                {menuItems.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item?.path}
                      className="text-md font-medium text-black hover:text-gray-900"
                    >
                      {item?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hidden lg:block ">
            <div className="flex gap-8 text-xl items-center justify-center">
              <button
                onClick={toggleCart}
                className="flex cursor-pointer text-xl   justify-center"
              >
                <span
                  className={`${
                    isScrolled ? "bg-white" : "bg-primary"
                  } px-[3px] py-[2px] text-sm text-red-600 -mr-7 -mt-4 rounded-full`}
                >
                  ({cart.length})
                </span>{" "}
                <MdOutlineShoppingCart />
              </button>
              <button
                onClick={toggleUser}
                className="flex cursor-pointer text-xl   justify-center"
              >
                <FaRegUser />
              </button>

              <button
                onClick={() => navigation("/contact")}
                className={`${
                  isScrolled ? "bg-white" : "bg-primary"
                }  text-black py-2 px-4 rounded-md text-sm font-semibold`}
              >
                Contact
              </button>
            </div>
          </div>
          <div className="lg:hidden">
            <HiOutlineMenuAlt3
              onClick={toggleMenu}
              className="h-6 w-6 cursor-pointer"
            />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span className="text-lg font-bold">Greenmind</span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-black bg-primary hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <IoMdClose className="h-6 w-6 " aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item, i) => (
                        <Link
                          key={i}
                          to={item.path}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <button
                    onClick={() => navigation("/contact")}
                    type="button"
                    className="mt-4 w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      {isCartOpen && <AddCarts toggleCart={toggleCart} />}
      {isUserOpen && <Adduser toggleUser={toggleUser} />}
    </div>
  );
};

export default Header;
