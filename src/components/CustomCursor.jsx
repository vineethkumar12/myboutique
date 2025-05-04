// components/CustomCursor.js
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => {
      setIsHovering(true);
    };

    const handleLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", updateCursorPosition);

    // Add event listeners for hoverable elements
    const hoverableElements = document.querySelectorAll("a, button");
    hoverableElements.forEach((element) => {
      element.addEventListener("mouseenter", handleHover);
      element.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      hoverableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleHover);
        element.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 ${
        isHovering ? "scale-150" : "scale-100"
      } transition-transform duration-200`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* Needle and Thread SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-orange-500"
      >
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
        <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
        <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
      </svg>
    </div>
  );
};

export default CustomCursor;
