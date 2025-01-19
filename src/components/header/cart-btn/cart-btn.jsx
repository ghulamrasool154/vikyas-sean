"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartBox from "../cart-box";
import { handleOpenCart } from "@/redux/slices/add-to-cart";

const CartBtn = ({ home }) => {
  let h = {
    0: "bg-backgroundClr text-white",
    1: "bg-white text-primary",
  };
  const { count, carts, open } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="text-[20px] leading-normal w-10 h-10 rounded-0 relative "
        onClick={() => dispatch(handleOpenCart())}
      >
        <i class="fa-solid fa-cart-shopping"></i>
        <span
          className={`absolute -top-2 -right-1 w-5 h-5 leading-[21px] text-sm  rounded-full ${
            home ? h[0] : h[1]
          }`}
        >
          {count}
        </span>
      </button>
      {open && <CartBox carts={carts} />}
    </>
  );
};

export default CartBtn;
