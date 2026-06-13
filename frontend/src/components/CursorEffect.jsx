import React, { useState, useEffect } from 'react';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if we are hovering over an interactive element
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor Dot */}
      <div 
        className="fixed top-0 left-0 w-3 h-3 bg-amber-500 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out"
        style={{ 
          transform: `translate(${position.x - 6}px, ${position.y - 6}px) scale(${isHovering ? 2.5 : 1})`,
        }}
      ></div>
      
      {/* Glow Effect / Flashlight Trailing Cursor */}
      <div 
        className="fixed top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none z-0 transition-transform duration-500 ease-out hidden md:block"
        style={{ 
          transform: `translate(${position.x - 192}px, ${position.y - 192}px)`,
        }}
      ></div>
    </>
  );
};

export default CursorEffect;
