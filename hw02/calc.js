/*
Design Decisions:
-  This calculator performs one calculation at a time.  After entering a 
number, an operation, and another number, the "+/=" enter key must be pressed,
after which a result will be displayed. The user can then enter their next 
calculation on the following line. Pressing the clear button gets rid of all 
operations and numbers in the current calculation, and starts a new calculation.

*/


(function () {
    "use strict";

    var plEqPressedLast = false;
    var currOp = null;
    var numOne = "";
    var numTwo = "";
    
    
    function evaluate() {
        
        var first = parseFloat(numOne);
        var sec = parseFloat(numTwo);
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
        x.innerHTML = total + "<br>";
        currOp = null;
        numOne = ""
        numTwo = "";
        
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
        x.innerHTML += "3";
        if (currOp === null) {
            numOne += "3";
        }
        else {
            numTwo += "3";
        }
    }

    function pressFour() {
        var x = document.getElementById("screen");
        x.innerHTML += "4";
        if (currOp === null) {
            numOne += "4";
        }
        else {
            numTwo += "4";
            
        }
    }

    function pressFive() {
        var x = document.getElementById("screen");
        x.innerHTML += "5";
        if (currOp === null) {
            numOne += "5";
        }
        else {
            numTwo += "5";
            
        }
    }

    function pressSix() {
        var x = document.getElementById("screen");
        x.innerHTML += "6";
        if (currOp === null) {
            numOne += "6";
        }
        else {
            numTwo += "6";
            
        }
        
    }

    function pressSeven() {
        var x = document.getElementById("screen");
        x.innerHTML += "7";
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
        x.innerHTML += "9";
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
        if (currOp === null) {
            numOne += ".";
        }
        else {
            numTwo += ".";
            
        }
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
        currOp = null;
        numOne = "";
        numTwo = "";
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
        
    }

    window.addEventListener("load", init, false);
})();
