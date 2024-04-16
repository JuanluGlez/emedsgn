import React, { useRef, useEffect } from 'react';
import '../css/Cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const actualizarPosicionCursor = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      cursorRef.current.style.left = `${x - 16}px`;
      cursorRef.current.style.top = `${y - 16}px`;  
    };

    document.addEventListener('mousemove', actualizarPosicionCursor);

    return () => {
      document.removeEventListener('mousemove', actualizarPosicionCursor);
    };
  }, []);

  // Función para verificar si el dispositivo es táctil
  function isTouchScreen() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
  }

  // Determinar si se debe aplicar el estilo del cursor o no
 

  // Uso de la función
  if (isTouchScreen()) {
    console.log("Estás accediendo desde un dispositivo táctil.");
    var cursorController = '';
  } else {
    console.log("Estás accediendo desde un dispositivo no táctil.");
    var cursorController = 'custom_cursor';
  }

  return (
    <div>
      <div className={cursorController} ref={cursorRef}></div>
    </div>
  );
};

export default Cursor;