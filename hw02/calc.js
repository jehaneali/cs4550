(function () {
    "use strict";
    
    // I decided to have the +/= button act as = only after being pressed twice, 
    // and act as + on a first press
    var plEqPressedLast = false;
    var total = 0;
    

    function pressPlusEquals() {
        var x = document.getElementById("screen");
        // if(plEqPressedLast) {
        //     x.innerHTML += " = ";
        // }
        // else {
        //     x.innerHTML += " + ";
        // }

        x.innerHTML += " + = "
        
    }

    function pressZero() {
        var x = document.getElementById("screen");
        x.innerHTML += " " + 1 + " ";
    }

    function pressOne() {
        var x = document.getElementById("screen");
        x.innerHTML += " " + 1 + " ";
    }

    function pressTwo() {
        var x = document.getElementById("screen");
        x.innerHTML += " " + 2 + " ";
    }

    function pressThree() {
        var x = document.getElementById("screen");
        x.innerHTML += " " + 3 + " ";
    }

    function pressFour() {
        var x = document.getElementById("screen");
        x.innerHTML += " " + 4 + " ";
    }

    function pressFive() {
        var x = document.getElementById("screen");
        x.innerHTML += " " + 5 + " ";
    }

    function pressSix() {
        var x = document.getElementById("screen");
        x.innerHTML += " " + 6 + " ";
    }

    function pressSeven() {
        var x = document.getElementById("screen");
        x.innerHTML += " " + 7 + " ";
    }

    function pressEight() {
        var x = document.getElementById("screen");
        x.innerHTML += " " + 8 + " ";
    }

    function pressNine() {
        var x = document.getElementById("screen");
        x.innerHTML += " " + 9 + " ";
    }

    function pressDec() {
        var x = document.getElementById("screen");
        x.innerHTML += ".";
    }

    function pressMinus() {
        var x = document.getElementById("screen");
        x.innerHTML += " - ";
    }

    function pressMult() {
        var x = document.getElementById("screen");
        x.innerHTML += " x ";
    }

    function pressDivide() {
        var x = document.getElementById("screen");
        x.innerHTML += " / ";
    }

    function pressClear() {
        var x = document.getElementById("screen");
        x.innerHTML = "";
    }
    


    function init() {
        var btnPE = document.getElementById("plusEquals");
        var btnClear = document.getElementById("clear");
        var btnZero = document.getElementById("zero");
        var btnOne = document.getElementById("one");
        var btnTwo = document.getElementById("two");
        var btnThree = document.getElementById("three");
        var btnFour = document.getElementById("four");
        var btnFive = document.getElementById("five");
        var btnSix = document.getElementById("six");
        var btnSeven = document.getElementById("seven");
        var btnEight = document.getElementById("eight");
        var btnNine = document.getElementById("nine");
        var btnDec = document.getElementById("decimal");
        var btnMinus = document.getElementById("minus");
        var btnMult = document.getElementById("multiply");
        var btnDivide = document.getElementById("divide");
        
        btnPE.addEventListener("click", pressPlusEquals);
        btnZero.addEventListener("click", pressZero);
        btnOne.addEventListener("click", pressOne);
        btnTwo.addEventListener("click", pressTwo);

        btnThree.addEventListener("click", pressThree);
        btnFour.addEventListener("click", pressFour);
        btnFive.addEventListener("click", pressFive);
        btnSix.addEventListener("click", pressSix);

        btnSeven.addEventListener("click", pressSeven);
        btnEight.addEventListener("click", pressEight);
        btnNine.addEventListener("click", pressNine);
        btnDec.addEventListener("click", pressDec);

        btnMinus.addEventListener("click", pressMinus);
        btnMult.addEventListener("click", pressMult);
        btnDivide.addEventListener("click", pressDivide);
        btnClear.addEventListener("click", pressClear);
        //btnClear.addEventListener("click", (btnClear.innerHTML) => document.getElementById("screen").innerHTML += " " + num + " ");

    }

    window.addEventListener("load", init, false);
})();





// var displayStr = "sup ";

// (function () {
//     "use strict";

//     function update() {
//         document.getElementById("plusEquals").addEventListener("click", changeScreen());
        
//         //document.getElementById("screen").innerHTML = "hi";
//     }

//     function changeScreen() {
//         document.getElementById("screen").innerHTML = "hi";
//     }
    
//    // document.getElementById("plusEquals").addEventListener("click", changeScreen());
// })();

// function changeScreen() {
//     document.getElementById("screen").innerHTML = "hi";
// }


// (function () {
//     "use strict";
//     function changeScreen() {
//         document.getElementById("screen").innerHTML = displayStr + "hellooo there";
//     }
    
// })
