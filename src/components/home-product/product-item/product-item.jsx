"use client";
import { addToCart } from "@/redux/slices/add-to-cart";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="group/pro bg-transparent hover:bg-white/90 hover:border-primary hover:shadow-2xl border border-primary2/40 rounded-md"
      onClick={() => dispatch(addToCart(product))}
    >
      <div className="h-[250px]  mw-10:h-[200px] w-full p-2.5 bg-white overflow-hidden">
        <Image
          src={product.image}
          width={200}
          height={200}
          alt={product.title}
          className="w-full h-full object-scale-down group-hover/pro:scale-110 transition-all text-center"
        />
      </div>

      <div className="pt-4 ">
        <h2 className="font-medium text-2xl text-white/90 group-hover/pro:text-secondary line-clamp-1 mx-2.5">
          <a href="#">{product.title}</a>
        </h2>
        <h2 className="text-xs text-primary2 my-3">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <span key={i}>
              <i class="fa-solid fa-star"></i>
            </span>
          ))}
          <span>&nbsp;{product.reviews}&nbsp;review</span>
        </h2>
        <h6 className="text-white/70 font-semibold text-lg my-4 group-hover/pro:text-secondary/70">
          {product.price}
        </h6>
        <button className="py-2.5 px-4 w-full text-base font-medium capitalize text-primary bg-white group-hover/pro:bg-primary2 group-hover/pro:text-white ">
          {product.btn}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
