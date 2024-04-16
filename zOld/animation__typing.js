// Detectar alto del scroll --------------------------------------------------------------------------------------------------------------

let animation = document.getElementById("typedtext"); //guardamos los elementos con el id "typedtext"

function detectScroll(){ //creamos la función para que se muestre el elemento en base al scroll
       
    // console.log("scroll funcionando TEXT");

    let scrollTop = document.documentElement.scrollTop; // guardamos la cantidad de scroll que hemos bajado
    let positionAnimation = animation.offsetTop; // detectamos la altura

    if(positionAnimation - 600 < scrollTop) { // si la altura detectada es menos que la cantidad de scroll que hemos bajado

        // se muestra la animación

        typewriter();
        removeScroll();
    
        // console.log("se ejecuta el código TEXT");

    }

    function removeScroll() { // quitamos el evento después de pasar 1px de altura de scroll

        if (positionAnimation - 601 < scrollTop) {

            window.removeEventListener('scroll', detectScroll);
    
    }

}

}

window.addEventListener('scroll', detectScroll); // detecta el scroll y ejecuta la función cuando se cumple la condición


// Animación --------------------------------------------------------------------------------------------------------------------

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
    var iRow; // initialise current row
     

    function typewriter(){
     
        sContents =  ' ';
     
        iRow = Math.max(0, iIndex-iScrollAt);
     
        var destination = document.getElementById("typedtext");
     
     
        while ( iRow < iIndex ) {
      
            sContents += aText[iRow++] + '<br />';
     
        }
     
        destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    
        if ( iTextPos++ == iArrLength ) {

            iTextPos = 0;
     
            iIndex++;
      
            if ( iIndex != aText.length ) {
       
                iArrLength = aText[iIndex].length;
       
                setTimeout("typewriter()", 100);
      
            }
     
        } 
        
        else {
      
            setTimeout("typewriter()", iSpeed);
     
        }
   
    }