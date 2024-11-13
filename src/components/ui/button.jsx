import React from "react";
import { cn } from "../../lib/utils";

const Button = ({ className, emphasise = false, children, link, newPage = false }) => {
  return (
    <a
      className={cn(
        className,
        "px-3 py-2 outline outline-2 rounded-md text-blue-400 outline-blue-400 m-2 cursor-pointer",
        emphasise && "text-white bg-blue-400"
      )}
      href={link}
      target={newPage && "_blank"}
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default Button;
