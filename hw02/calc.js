(function () {
    "use strict";
    
    // I decided to have the +/= button act as = only after being pressed twice, 
    // and act as + on a first press

    // I also decided that the answer would not display until the = button is pressed, 
    // as per the Mac calculator

    // Additionally, it appears that 4 function calculators often do not support PEMDAS
    // order of operations, so my calculator does not support that -- it simply 
    // executes operations in the order they are typed in


    var plEqPressedLast = false;
    var currOp = null;
    var numOne = "";
    var numTwo = "";
    

    
    function evaluate() {
        var first = parseInt(numOne);
        var sec = parseInt(numTwo);
        var total = 0;
        if (currOp === "add") {
            total = first + sec;
        }
        else if (currOp === "minus") {
            total = first - sec;
        }
        else if (currOp === "multiply") {
            total = first * sec;
        }
        else if (currOp === "divide") {
            total = first / sec;
        }
        console.log(total);
        var x = document.getElementById("screen");
        x.innerHTML = total;
    }

    function pressPlusEquals() {
        var x = document.getElementById("screen");
        x.innerHTML += " + ";
        if(currOp === null) {
            currOp = "add";
        }
        else {
            evaluate();
        }
    }

    function pressZero() {
        var x = document.getElementById("screen");
        x.innerHTML += "0";
        if (currOp === null) {
            numOne += "0";
        }
        else {
            numTwo += "0";
        }
    }

    function pressOne() {
        var x = document.getElementById("screen");
        x.innerHTML += "1";
        if (currOp === null) {
            numOne += "1";
        }
        else {
            numTwo += "1";
        }
    }

    function pressTwo() {
        var x = document.getElementById("screen");
        x.innerHTML += "2";
        if (currOp === null) {
            numOne += "2";
        }
        else {
            numTwo += "2";
        }
    }

    function pressThree() {
        var x = document.getElementById("screen");
        x.innerHTML += " " + 3 + " ";
        if (currOp === null) {
            numOne += "3";
        }
        else {
            numTwo += "3";
        }
    }

    function pressFour() {
        var x = document.getElementById("screen");
        x.innerHTML += " " + 4 + " ";
        if (currOp === null) {
            numOne += "4";
        }
        else {
            numTwo += "4";
        }
    }

    function pressFive() {
        var x = document.getElementById("screen");
        x.innerHTML += " " + 5 + " ";
        if (currOp === null) {
            numOne += "5";
        }
        else {
            numTwo += "5";
        }
    }

    function pressSix() {
        var x = document.getElementById("screen");
        x.innerHTML += " " + 6 + " ";
        if (currOp === null) {
            numOne += "6";
        }
        else {
            numTwo += "6";
        }
        
    }

    function pressSeven() {
        var x = document.getElementById("screen");
        x.innerHTML += " " + 7 + " ";
        if (currOp === null) {
            numOne += "7";
        }
        else {
            numTwo += "7";
        }
    }

    function pressEight() {
        var x = document.getElementById("screen");
        x.innerHTML += "8";
        if (currOp === null) {
            numOne += "8";
        }
        else {
            numTwo += "8";
        }
        
    }

    function pressNine() {
        var x = document.getElementById("screen");
        x.innerHTML += " " + 9 + " ";
        if (currOp === null) {
            numOne += "9";
        }
        else {
            numTwo += "9";
        }
    }

    function pressDec() {
        var x = document.getElementById("screen");
        x.innerHTML += ".";
        //otherNum += ".";
    }

    function pressMinus() {
        var x = document.getElementById("screen");
        x.innerHTML += " - ";

        if(currOp === null) {
            currOp = "minus";
        }
        else {
            evaluate();
        }
        
    }

    function pressMult() {
        var x = document.getElementById("screen");
        x.innerHTML += " x ";
        if(currOp === null) {
            currOp = "multiply";
        }
        else {
            evaluate();
        }
    }

    function pressDivide() {
        var x = document.getElementById("screen");
        x.innerHTML += " / ";
        if(currOp === null) {
            currOp = "divide";
        }
        else {
            evaluate();
        }
    }

    function pressClear() {
        var x = document.getElementById("screen");
        x.innerHTML = "";
        //total = 0;
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
