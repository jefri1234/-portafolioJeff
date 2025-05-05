"use client"
import React from 'react';
import Link from 'next/link';

const ScrollToTopButton = () => {



  return (
    <Link
      href={"#about"}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        fontSize: '20px',
        borderRadius: '50%',
        border: 'none',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
      }}
      aria-label="Scroll to top"
      className='text-white bg-teal-300 py-2 px-4  hover:bg-teal-400 transition duration-300 ease-in-out cursor-none'
    >
      ↑
    </Link>
  );
};

export default ScrollToTopButton;
