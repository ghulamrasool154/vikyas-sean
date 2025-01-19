import Image from "next/image";
import React from "react";
import MainHeading from "../abs-headings/main-heading";
import ProductItem from "./product-item/product-item";

const HomeProduct = ({ products }) => {
  return (
    <section className="bg-darkBlue ">
      <div className="max-w-maxWidth mx-auto py-14 px-5 text-center">
        <MainHeading color={"text-white"}>
          <span className="text-primary2">{products.header1} </span>{" "}
          {products.header2}
        </MainHeading>

        <div className="gap-4 grid grid-cols-4 mw-10:grid-cols-2 mw-5:grid-cols-1  mt-3">
          {products.products.map((product, index) => {
            return <ProductItem product={product} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
