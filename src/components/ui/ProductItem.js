import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
export default function ProductItem({ product }) {
  return (
    <div className="bg-white flex flex-col gap-y-1 relative items-center text-center p-3">
      <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-brand-color shadow-md hover:bg-brand-color hover:text-brand-yellow-color hover:border-brand-color transition-colors"><AiOutlinePlus size={16}/></button>
      <img src={product.image} alt={product.title} />
      <div className="text-sm font-semibold text-brand-color"> {product.price}</div>
      <div className="text-sm font-semibold text-gray-900"> {product.title}</div>
      <div className="text-gray-500"> {product.alt}</div>
    </div>
  );
}
