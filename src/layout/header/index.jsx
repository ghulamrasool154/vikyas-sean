"use client";
import LocaleSwitcher from "@/components/locale-switcher/locale-switcher";

import ButtonUI from "@/components/ui/button/darkbtn";
import BurgerIconSVG from "@/svg-icons/burger-icons";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavItem from "@/components/header/nav-item/nav-item";
import MobileMenuLayout from "@/components/header/mbile-menu/mobile-menu";
import LightBtn from "@/components/ui/button/lightBtn";
import NavLink from "@/components/nav-link/nav-link";
import DarkHoverBtn from "@/components/ui/button/darkHoverBtn";
import CartBtn from "@/components/header/cart-btn/cart-btn";

const Header = ({ header }) => {
  const { navigation, button } = header;

  const [isOpened, setIsOpened] = useState(false);

  const handleCloseMenu = () => setIsOpened(!isOpened);
  const [isScrollEffect, setIsScrollEffect] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrollEffect(true);
      } else {
        setIsScrollEffect(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let pathname = usePathname();
  const homeRegex = /^\/(en|de|fr|zh-cn|ar)$/;
  const isHomePage = homeRegex.test(pathname);

  let effect = isScrollEffect ? "top-0" : "-top-[400px]";
  let topClasses = isHomePage ? effect : "top-0";

  return (
    <>
      {isHomePage && (
        <header
          className={` mw-10:px-2.5  absolute left-0 right-0  z-[9999] transition-all duration-500 text-white`}
        >
          <div className="max-w-maxWidth mx-auto flex justify-between  h-[100px] mw-7:h-fit mw-7:py-2.5 items-center">
            <NavLink className="logo cursor-pointer  !opacity-100" href={"/"}>
              <Image
                src="/assets/vikas_sandy_logo.jpeg"
                width={100}
                height={100}
                alt="quantomo"
                className="h-20 w-auto  mw-5:!h-14 mb-2.5  "
              />
              {/* <h2 className="font-semibold text-2xl">Vikyas</h2> */}
            </NavLink>
            <nav className="mw-10:hidden">
              <ul className="flex">
                {navigation.map((nav, index) => {
                  return (
                    <NavItem
                      classes={`px-3 py-2 rounded-lg text-red hover:underline underline-offset-4  capitalize`}
                      nav={nav}
                      key={index}
                      to={nav.link}
                    />
                  );
                })}
              </ul>
            </nav>
            <div className="flex items-center relative">
              <LocaleSwitcher />
              <CartBtn home={true} />
              {/* <button className="cursor-pointer  inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent border border-white rounded-full hover:bg-[#FFFFFF33] h-10 px-4 py-2 capitalize mw-7:py-1 mw-7:px-2.5 mw-7:h-fit mx-2.5">
                {button}
              </button> */}
              <div
                className="burger-icon hidden mw-10:block  cursor-pointer"
                onClick={handleCloseMenu}
              >
                <BurgerIconSVG className="h-6 w-6 " />
              </div>
            </div>
          </div>
          {isOpened && (
            <MobileMenuLayout
              handleCloseMenu={handleCloseMenu}
              navigation={navigation}
            />
          )}
        </header>
      )}
      <header
        className={` mw-10:px-2.5  fixed left-0 right-0 bg-backgroundClr  z-[9999] ${topClasses} transition-all duration-500 text-primary`}
      >
        <div className="max-w-maxWidth mx-auto flex justify-between  h-[100px] mw-7:h-fit mw-7:py-2.5 items-center">
          <NavLink className="logo cursor-pointer  !opacity-100" href={"/"}>
            <Image
              src="/assets/vikas_sandy_logo.jpeg"
              width={100}
              height={100}
              alt="quantomo"
              className="h-20 w-auto  mw-5:!h-14 mb-2.5  "
            />
          </NavLink>
          <nav className="mw-10:hidden">
            <ul className="flex">
              {navigation.map((nav, index) => {
                let first = index === 0 && isHomePage ? " " : " ";
                return (
                  <NavItem
                    classes={`px-3 py-2 rounded-lg text-red hover:underline underline-offset-4  capitalize ${first}`}
                    nav={nav}
                    key={index}
                    to={nav.link}
                  />
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center relative">
            <LocaleSwitcher />
            <CartBtn />
            {/* <DarkHoverBtn classes={"mx-2.5"}>{button}</DarkHoverBtn> */}
            <div
              className="burger-icon hidden mw-10:block cursor-pointer"
              onClick={handleCloseMenu}
            >
              <BurgerIconSVG className="h-6 w-6 " />
            </div>
          </div>
        </div>
        {isOpened && (
          <MobileMenuLayout
            handleCloseMenu={handleCloseMenu}
            navigation={navigation}
            isActive={isHomePage}
          />
        )}
      </header>
    </>
  );
};

export default Header;
