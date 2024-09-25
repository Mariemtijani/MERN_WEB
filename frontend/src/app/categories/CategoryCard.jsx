import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryCard({ name, image , id}) {
  return (
    <div className="">
      <Link className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg w-56 h-56 no-underline" 
      to={`show-services/${id}`}>
       
      
      {image && (
        <img
          alt={name}
          className="[grid-area:stack] object-cover w-56 h-48"
          
          src={image}
          
        />
      )}
      <div className="flex-1 [grid-area:stack] bg-black/50 group-hover:opacity-90 transition-opacity text-white p-4 justify-end flex flex-col gap-2">
        <h3 className="font-semibold text-base tracking-tight">{name}</h3>
      </div>
    </Link>
    </div>
  );
}
