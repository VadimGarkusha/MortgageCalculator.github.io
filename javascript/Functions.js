 /* Vadym Harkusha 300909484 | Assignment 1*/


 function CalculateDownPayment(amount) {
     //declaring and assigning variables 

     var percent;

     //checking what radio button is checked and assigning it to the variable
     if (paymentOption1.checked) percent = 0.05;
     else if (paymentOption2.checked) percent = 0.1;
     else if (paymentOption3.checked) percent = 0.15;
     else if (paymentOption4.checked) percent = 0.2;

     //checking if the right data is entered, counting and displaying the down payment according to the conditions
     if (amount > 0)
         document.getElementById("downPayment").innerHTML = amount * percent;
     else {
         document.getElementById("downPayment").innerHTML = "Enter number!";
         alert("Enter number more than 0!");
     }



     //checking condition given in the assignment where if payment option was selected 
     //20% then amortization must be 30 years, if another option was selected then amortization must be 25 years 
     if (percent == 0.2) {
         //making option with 25 years disable
         document.getElementById("select").options[0].disabled = true;
         //making option with 30 years enable
         document.getElementById("select").options[1].disabled = false;
         //making option with 30 years selected
         document.getElementById("select").options[1].selected = true;

     } else {
         //making option with 30 years disable
         document.getElementById("select").options[1].disabled = true;
         //making option with 25 years enable
         document.getElementById("select").options[0].disabled = false;
         //making option with 25 years selected
         document.getElementById("select").options[0].selected = true;
     }

 }

 function CalculateMonthlyPaymment(rate, amount) {
     //declaring the variables 
     var percent;
     var years;



     //checking what option was selected among 25 and 30 years and assigning proper integer to the variable
     if (document.getElementById("select").options[0].selected) years = 25;
     else years = 30;

     //checking if value entred as an interest rate is numeral 
     if (rate >= 0 && rate < 1) {
         //checkig if there is any interest rate ,counting and displaying the month payment 
         //according to the formula given on the wikipedia 
         if (rate == 0) {
             document.getElementById("monthPayment").innerHTML = amount / (years * 12);
         } else {
             rate = (rate / 12);
             document.getElementById("monthPayment").innerHTML = (rate * amount) / (1 - Math.pow(1 + rate, -years * 12));
         }
     } else {
         alert("Enter number more than 0 and less than 1!");
     }
 }

 window.onload = function DivParallaxHeight() {
     var parallax = document.getElementsByClassName("parallax1");

     var calculator = document.getElementById("Calculator");
     var calcHeight = String(calculator.offsetHeight);
     parallax[0].setAttribute("style", "height:" + calcHeight + "px");
     parallax[0].style.height = calcHeight + "px";
     parallax[1].setAttribute("style", "height:" + calcHeight + "px");
     parallax[1].style.height = calcHeight + "px";
     if (window.innerWidth == 1024) {
         calculator.setAttribute("style", "width:54%!important");
         calcHeight = String(calculator.offsetHeight);
         parallax[0].setAttribute("style", "width:23%!important;height:" + calcHeight + "px");
         parallax[0].style.height = calcHeight + "px";
         parallax[1].setAttribute("style", "width:23%!important;height:" + calcHeight + "px");
         parallax[1].style.height = calcHeight + "px";
     }
     if (window.innerWidth == 768) {
         calculator.setAttribute("style", "width:72%!important");
         calcHeight = String(calculator.offsetHeight);
         parallax[0].setAttribute("style", "width:14%!important;height:" + calcHeight + "px");
         parallax[0].style.height = calcHeight + "px";
         parallax[1].setAttribute("style", "width:14%!important;height:" + calcHeight + "px");
         parallax[1].style.height = calcHeight + "px";
     }
     if (window.innerWidth < 768) {
         calculator.setAttribute("style", "width:100%!important");
         parallax[0].setAttribute("style", "width:0%!important;");
         parallax[1].setAttribute("style", "width:0%!important;");

         var phonedivs = document.getElementsByClassName("phoneDiv");
         var i = 0;
         while (phonedivs[i] != null) {
             phonedivs[i].style.padding = "0px 2px";
             i++;
         }

         document.getElementById("firstRadio").style.margin = "0px 0px 0px 10px"
     }
 }