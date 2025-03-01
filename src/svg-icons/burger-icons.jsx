import * as React from "react";
const BurgerIconSVG = (props) => (
  <svg
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);
export default BurgerIconSVG;
