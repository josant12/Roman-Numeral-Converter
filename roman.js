function convertToRoman(num) {
    var romanNum = {
      M: 1000, 
      CM: 900, 
      D: 500 , 
      CD: 400,
      C: 100, 
      XC: 90, 
      L: 50, 
      XL: 40, 
      X: 10, 
      IX: 9, 
      V: 5, 
      IV: 4, 
      I: 1 
   };
     
   var roman = "";
   
   for (var index in romanNum){
     while (num >= romanNum[index]) {
       roman += index;
       num -= romanNum[index];
     }
   }
     return roman;
   }
   
   function romanCheck(){
       let input= document.getElementById("inputRoman");
       let valinput = input.value;
       let check = convertToRoman(valinput);
       alert("Su numero romano es:  " + check);
    
   }
   
