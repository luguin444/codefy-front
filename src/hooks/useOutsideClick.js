import React, { useRef, useEffect } from 'react';

export default function UseOutsideClick ({ onClickOutside, children, onClick = () => {} }) {
  const ref = useRef();

  const clickHandler = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClickOutside();
    } else if (ref.current) {
      onClick();
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickHandler);

    return () => {
        document.removeEventListener('click', clickHandler);
    };      
  });

  return (
    <span ref={ref}>
      {children}
    </span >
  );
}
