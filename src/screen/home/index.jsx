import MainHeading from "@/components/abs-headings/main-heading";
import SubHeading from "@/components/abs-headings/sub-heading";
import HomeHero from "@/components/home-hero";
import HomeProduct from "@/components/home-product/home-product";
import Image from "next/image";
import React from "react";

const HomePageScreen = ({ content, lang }) => {
  let pureSection = content.sections[1];
  let makesSection = content.sections[2];
  let productSection = content.sections[3];
  let storySection = content.sections[4];
  let testimonialSection = content.sections[5];
  let products = content.sections[6];

  return (
    <div className="home-page-screen">
      <HomeHero content={content.sections[0]} />
      <section name="pure-organic">
        <div className="max-w-maxWidth mx-auto py-10 px-5 text-center">
          <div className=" mb">
            <Image
              src="/assets/vikas-img.png"
              className="mx-auto max-h-96 w-auto"
              alt="demo"
              width={500}
              height={500}
            />
          </div>
          <SubHeading color="text-primary">{pureSection.title}</SubHeading>
          <MainHeading color={"text-primary"}>{pureSection.header}</MainHeading>
          <SubHeading color="text-primary">{pureSection.subHeader}</SubHeading>

          <p className="font-rubik mb-5 text-[16px] font-normal text-secondary">
            {pureSection.subTitle}
          </p>
        </div>
      </section>
      <HomeProduct products={products} />
      <section name="what-makes-us-different?">
        <div className="max-w-maxWidth mx-auto py-10 px-5 text-center">
          <MainHeading color={"text-primary"}>
            {makesSection.header}
          </MainHeading>
          <ul className="mt-4">
            {makesSection.categories.map((category, index) => {
              return (
                <li
                  key={index}
                  className="bg-darkBlue flex flex-col relative rounded-md border  border-foreground/30  p-6 h-full "
                >
                  <SubHeading color="text-white">{category.title}</SubHeading>
                  <p className="my-4 text-white font-rubik text-[16px] font-normal ">
                    {category.subTitle}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="bg-darkBlue" name="products">
        <div className="max-w-maxWidth mx-auto py-10 px-5 text-center">
          <MainHeading color={"text-white"}>
            {productSection.header}
          </MainHeading>
          <ul className="mt-4">
            {productSection.categories.map((category, index) => {
              return (
                <li
                  key={index}
                  className=" flex flex-col relative rounded-md border text-center border-secondary  p-6 h-full "
                >
                  <SubHeading color="text-white">{category.title}</SubHeading>
                  <p className="my-4 text-white font-rubik text-[16px] font-normal ">
                    {category.subTitle}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section name="our-story">
        <div className="max-w-maxWidth mx-auto py-10 px-5">
          <div className=" px-4 md:px-[10%] border relative border-black/10 rounded-[12px]  flex flex-col justify-center items-center p-8 bg-primary2 overflow-hidden">
            <div className="z-10 flex flex-col text-center justify-center items-center ">
              <MainHeading color={"text-primary"}>
                {storySection.header}
              </MainHeading>
              <ul className="mt-4">
                {makesSection.categories.map((category, index) => {
                  return (
                    <li key={index}>
                      <SubHeading color="text-primary">
                        {category.title}
                      </SubHeading>
                      <p className="text-secondary mt-6 text-center mb-8">
                        {category.subTitle}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section name="testimonials">
        <div className="max-w-maxWidth mx-auto py-10 px-5">
          <div className="max-w-[800px] mx-auto">
            <div className="flex flex-col justify-center items-center">
              <MainHeading color={"text-primary"}>
                {testimonialSection.header}
              </MainHeading>
              <ul>
                {testimonialSection.categories.map((category, index) => {
                  return (
                    <li key={index} className="text-center mt-4">
                      <SubHeading color="text-secondary">
                        {category.title}
                      </SubHeading>
                      <p className="my-4 text-secondary font-rubik text-[16px] font-normal ">
                        {category.subTitle}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageScreen;
