import React from 'react';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="group cursor-pointer">
      {/* Image container with overlay title */}
      <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-white text-2xl font-bold leading-tight">
            {title}
          </h3>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Description */}
      <div className="px-2">
        <p className="text-gray-300 text-medium leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;