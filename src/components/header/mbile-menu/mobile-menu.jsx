import React from "react";
import NavItem from "../nav-item/nav-item";
import CloseIconSVG from "@/svg-icons/close-icons";

const MobileMenuLayout = ({ handleCloseMenu, navigation, isActive }) => {
  return (
    <div
      className="fixed top-0 left-0 bottom-0 h-screen w-screen bg-backgroundClr/40 backdrop-blur-lg z-[9999] p-4"
      onClick={handleCloseMenu}
    >
      <CloseIconSVG
        className="ml-4 mt-2 w-6 h-6 z-[200]"
        onClick={handleCloseMenu}
      />
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <ul>
          {navigation.map((nav, index) => {
            return (
              <NavItem
                onClick={handleCloseMenu}
                key={index}
                nav={nav}
                classes={`w-full block text-2xl capitalize `}
                to={nav.link}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenuLayout;
