import React from 'react';

export default function Logo({ className = '' }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle */}
      <circle cx="100" cy="100" r="100" fill="#D8E8F0" />
      
      {/* RM Logo */}
      <g transform="translate(50, 50)">
        {/* R Letter */}
        <path 
          d="M0 0 H50 V55 H40 Q20 55 20 75 V100 H0 V0 Z M20 20 V35 Q20 35 30 35 H50 V20 H20 Z" 
          fill="#3B8FCC"
        />
        
        {/* M Letter - Right side */}
        <path 
          d="M60 0 H110 V100 H90 V40 L90 30 Q80 50 70 70 L60 85 V100 H40 V85 L50 70 V40 V0 Z" 
          fill="#3B8FCC"
        />
        
        {/* Connecting curve */}
        <path 
          d="M20 75 Q50 90 70 70" 
          stroke="#3B8FCC" 
          strokeWidth="15" 
          fill="none"
        />
      </g>
    </svg>
  );
}