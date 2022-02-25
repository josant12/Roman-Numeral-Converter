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

console.log(convertToRoman(1023));
