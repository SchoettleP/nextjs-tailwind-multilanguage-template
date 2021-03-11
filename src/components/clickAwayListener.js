import React, { useRef, useEffect } from 'react';

function useClickAwayListener(ref, onClick) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick
          ? onClick()
          : console.log('ClickAwayListener: No function provided');
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function ClickAwayListener({ children, onAwayClick }) {
  const wrapperRef = useRef(null);
  useClickAwayListener(wrapperRef, onAwayClick);

  return <div ref={wrapperRef}>{children}</div>;
}

export default ClickAwayListener;
