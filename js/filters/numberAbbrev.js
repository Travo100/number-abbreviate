angular
  .module('app')
  .filter('numberAbbrev', numberAbbrev);
  function numberAbbrev() {
    var letter;
    return function(num) {
    
    // give the number the correct designator, based on its original value and up 100th trillion
    // ie : 10,000 = 10K, 1,000,000 = 1M, 1,000,000,000 = 1B, 1,000,000,000,000 = 1T
    if (num >= Math.pow(10, 4) && num < Math.pow(10, 6)){
        letter = 'K';
     } else if (num >= Math.pow(10, 6) && num < Math.pow(10, 9)){
        letter = 'M';
     } else if (num >= Math.pow(10, 9) && num < Math.pow(10, 12)){
        letter = 'B';
     } else if (num >= Math.pow(10, 12) && num < Math.pow(10, 15)){
        letter = 'T';
     } else {
        letter = '';
        return num.toFixed(0);
     }

      // place the decimal point in the correct spot
      // so if the number is 
      // 1,253,502 = 1.3M
      // 12,542,423 = 12.5M
      // 124,634,242 = 125M
      var y = 0;
      var z = 0;
      var x = "";
      for (var i = 1; i < 16; i++) {
        while(num <= Math.pow(10, i)) {
          if (num === Math.pow(10, 4) || num === Math.pow(10, 6) || num === Math.pow(10, 9) || num === Math.pow(10, 12)) {
            y = num/Math.pow(10, i);
          }
          if (num > Math.pow(10, 6) && num <= Math.pow(10, 7) || num > Math.pow(10, 9) && num <= Math.pow(10, 10) || num > Math.pow(10, 12) && num <= Math.pow(10, 13)) {
            y = num/Math.pow(10, i - 1);
          }
          if (num > Math.pow(10, 4) && num <= Math.pow(10, 5) || num > Math.pow(10, 7) && num <= Math.pow(10, 8) || num > Math.pow(10, 10) && num <= Math.pow(10, 11) || num > Math.pow(10, 13) && num <= Math.pow(10, 14)) {
            y = num/Math.pow(10, i - 2);
          }
          if (num > Math.pow(10, 5) && num < Math.pow(10, 6) || num > Math.pow(10, 8) && num < Math.pow(10, 9) || num > Math.pow(10, 11) && num <  Math.pow(10, 12) || num > Math.pow(10, 14) && num <= Math.pow(10, 15)) {
            y = num/Math.pow(10, i - 3);
          }   

          // thousands rounding up to millions 

          if (num >= 99999 && num < Math.pow(10, 5)) {
            z = num/Math.pow(10, i - 2);
            letter = 'K';
            return z.toFixed(0) + letter;
          }
          if (num >= 999999 && num < Math.pow(10, 6)) {
            z = num/Math.pow(10, i );
            letter = 'M';
            return z.toFixed(0) + letter;
          } 
          
          // million rounding up to billions
          if (num >= 9999000 && num < Math.pow(10, 7)) {
            z = num/Math.pow(10, i - 1);
            letter = 'M';
            return z.toFixed(0) + letter;
          }
          if (num >= 99999000 && num < Math.pow(10, 8)) {
            z = num/Math.pow(10, i - 2);
            letter = 'M';
            return z.toFixed(0) + letter;
          }
          if (num >= 999999000 && num < Math.pow(10, 9)) {
            z = num/Math.pow(10, i);
            letter = 'B';
            return z.toFixed(0) + letter;
          } 

          // billions rounding up to trillions
          if (num >= 9999000000 && num < Math.pow(10, 10)) {
            z = num/Math.pow(10, i - 1);
            letter = 'B';
            return z.toFixed(0) + letter;
          }
          if (num >= 99999000000 && num < Math.pow(10, 11)) {
            z = num/Math.pow(10, i - 2);
            letter = 'B';
            return z.toFixed(0) + letter;
          }
          if (num >= 999999000000 && num < Math.pow(10, 12)) {
            z = num/Math.pow(10, i);
            letter = 'T';
            return z.toFixed(0) + letter;
          }

          // trillions rounding up to quadrillions
          if (num >= 9999999000000 && num < Math.pow(10, 13)) {
            z = num/Math.pow(10, i - 1);
            letter = 'T';
            return z.toFixed(0) + letter;
          }
          if (num >= 99999999000000 && num < Math.pow(10, 14)) {
            z = num/Math.pow(10, i - 2);
            letter = 'T';
            return z.toFixed(0) + letter;
          }
          if (num >= 999999999000000 && num < Math.pow(10, 15)) {
            z = num/Math.pow(10, i);
            letter = 'Q';
            return z.toFixed(0) + letter;
          }         
          
          x = y.toString();
          if (x.toString().charAt(1) === ".") {
            return Number(x).toFixed(2) + letter;
          } else if (x.toString().charAt(2) === ".") {
            return Number(x).toFixed(1) + letter;
          } else if (x.charAt(3) === "." && x > "1") {
            return Number(x).toFixed(0) + letter;
          } else {
            return Number(x).toFixed(0) + letter;
          }
        }
      } 
  };
}
