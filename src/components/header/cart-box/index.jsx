import Image from "next/image";
import React from "react";

const CartBox = ({ carts }) => {
  return (
    <div className="bg-white absolute top-8 right-2.5 w-52	 rounded-md p-2.5">
      {carts.length > 0 ? (
        <>
          <p className="text-primary font-medium text-sm ">Cart Item</p>
          <ul className="mt-2.5">
            {carts.map((cart) => {
              return (
                <li className="flex items-center border justify-between border-primary/60 pr-2.5 mb-2.5 last:mb-0">
                  <Image
                    src={cart.image}
                    width={500}
                    height={500}
                    alt={cart.title}
                    className="w-12 h-12  object-cover"
                  />
                  <h2 className="font-normal text-sm text-secondary mx-2.5 text-start w-full">
                    {cart.title}
                  </h2>
                  <h2 className="font-semibold text-base  text-primary2">
                    {cart.qty}
                  </h2>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p className="text-primary font-medium text-sm ">Cart is Empty</p>
      )}
    </div>
  );
};

export default CartBox;
