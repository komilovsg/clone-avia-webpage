"use client"

import React, { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  show: boolean;
  onClickOutside: () => void;
  width: string;
}

const Dropdown: React.FC<DropdownProps> = ({show, onClickOutside, width, children, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleEscapePress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapePress);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapePress);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>
      {isOpen && (
        <div className={`absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${className} sm:w-96 w-full left-1/2 transform -translate-x-1/2 sm:left-auto sm:transform-none`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

