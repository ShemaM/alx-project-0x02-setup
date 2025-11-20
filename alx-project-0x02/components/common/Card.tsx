import React from "react";
import {type CardProps } from "@/interfaces";



const Card = ({ title, content }: CardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
