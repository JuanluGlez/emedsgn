import React from 'react'

// animación tywriter declarada en el area global

  // primero definimos todos los valores que vamos a usar en variables.
  var aText = new Array(
    "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
    "abcdefghijklmnñopqrstuvwxyz", 
    "0123456789",   
    "!?&€%@#.,* ", 
  );

  var iSpeed = 100; // time delay of print out
  var iIndex = 0; // start printing array at this position
  var iArrLength = aText[1].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
  
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow = -1; // initialise current row

//

// aquí declaramos la función y ponemos window. para asegurarnos que se está declarando de forma global
  window.typewriter = function() {
    
    sContents = ' ';
  
    iRow = Math.max(0, iIndex - iScrollAt);
  
    while (iRow < iIndex) {
      sContents += aText[iRow++] + '<br />';
    }
  
    // Verifica si aText[iIndex] está definido antes de acceder a su método substring
    if (aText[iIndex] !== undefined) {
    document.getElementById('typedtext').innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";

    if (iTextPos++ == iArrLength) {
     iTextPos = 0;
     iIndex++;

     if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout(window.typewriter, 100);
      }
      } else {
      setTimeout(window.typewriter, iSpeed);
      }
    }

  }

//

export const TypingAnimation = () => {
  return (
    <div>
        <div id="typedtext"></div>
    </div>
  )
}

export default TypingAnimation;
