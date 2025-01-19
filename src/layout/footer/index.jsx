import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = ({ footer }) => {
  const { crossSiteNavigation } = footer;
  let links = [
    {
      href: "https://x.com/rakniuae",
      src: "/x.svg",
      name: "x",
    },
    {
      href: "https://www.linkedin.com/company/rakni-investment-development/",
      src: "/linkedin.svg",
      name: "linkedin",
    },
    {
      href: "https://www.instagram.com/rakni.ae",
      src: "/instagram.svg",
      name: "instagram",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61564635794140&amp;mibextid=LQQJ4d",
      src: "/facebook.svg",
      name: "facebook",
    },
  ];
  return (
    <footer className="bg-darkBlue  border-t border-primary/10 p-3 py-5 ">
      <div className="max-w-maxWidth mx-auto ">
        <div className="grid  sm:grid-cols-3 gap-4">
          <div className="log">
            <Image
              width={100}
              height={100}
              src="/assets/vikas_sandy_logo.jpeg"
              title="logo"
              className="h-20 w-auto  mw-5:!h-14 mb-2.5  "
              alt="logo"
            />

            {/* <h2 className="font-semibold text-2xl text-white">Vikyas</h2> */}
            <p className="text-sm mb-1 text-white">E: contact@vikyas.com</p>
            <p className="text-sm text-white">Seattle WA, USA 🇺🇸</p>
          </div>
          <div className=" flex items-start flex-col">
            {crossSiteNavigation.map((navigation, index) => {
              return (
                <div key={index}>
                  <Link
                    href={"#"}
                    className="px-3 py-2 rounded-lg  hover:underline underline-offset-4  capitalize text-white  "
                  >
                    {navigation.name}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="flex gap-2 justify-start sm:justify-end h-fit  col-span-2 sm:col-auto">
            {links.map((link, index) => {
              return (
                <Link target="_blank" href={link.href} key={index}>
                  <Image
                    width={50}
                    height={50}
                    src={`/assets/social${link.src}`}
                    title={link.name}
                    className="h-5 w-auto brightness-[10]"
                    alt="social-links"
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <p className="text-xs text-white pt-3">
          Copyright © 2024 Vikyas All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
