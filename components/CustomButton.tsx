import React from "react";
import { custonButtonProps } from "../types";

type Props = {};

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: custonButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={` flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
