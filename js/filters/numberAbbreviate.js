(function() {
  'use strict';
  angular
    .module('app')
    .filter('numberAbbreviate', numberAbbreviate);

  function numberAbbreviate() {
    var letter = '';
    var numDivided = 0;
    var numFormed = 0;
    var numToString = '';
    return function(num) {
      if (num === undefined) {
        num = 0;
      } else {
        num = num;
      }
      // give the number the correct designator, based on its original value and up 100th trillion
      // ie : 10,000 = 10K, 1,000,000 = 1M, 1,000,000,000 = 1B, 1,000,000,000,000 = 1T
      if (num >= Math.pow(10, 4) && num < Math.pow(10, 6)) {
        letter = 'K';
      } else if (num >= Math.pow(10, 6) && num < Math.pow(10, 9)) {
        letter = 'M';
      } else if (num >= Math.pow(10, 9) && num < Math.pow(10, 12)) {
        letter = 'B';
      } else if (num >= Math.pow(10, 12) && num < Math.pow(10, 15)) {
        letter = 'T';
      } else {
        letter = '';
        return num.toFixed(0);
      }

      // Doing division on the number to even it out
      // 1000000 / Math.pow(10, 6) == 1 
      for (var i = 1; i < 16; i++) {
        while (num <= Math.pow(10, i)) {
          if (num === Math.pow(10, 6) || num === Math.pow(10, 9) || num === Math.pow(10, 12)) {
            numDivided = num / Math.pow(10, i);
          }
          if (num === Math.pow(10, 4) || num > Math.pow(10, 6) && num <= Math.pow(10, 7) || num > Math.pow(10, 9) && num <= Math.pow(10, 10) || num > Math.pow(10, 12) && num <= Math.pow(10, 13)) {
            numDivided = num / Math.pow(10, i - 1);
          }
          if (num > Math.pow(10, 4) && num <= Math.pow(10, 5) || num > Math.pow(10, 7) && num <= Math.pow(10, 8) || num > Math.pow(10, 10) && num <= Math.pow(10, 11) || num > Math.pow(10, 13) && num <= Math.pow(10, 14)) {
            numDivided = num / Math.pow(10, i - 2);
          }
          if (num > Math.pow(10, 5) && num < Math.pow(10, 6) || num > Math.pow(10, 8) && num < Math.pow(10, 9) || num > Math.pow(10, 11) && num < Math.pow(10, 12) || num > Math.pow(10, 14) && num <= Math.pow(10, 15)) {
            numDivided = num / Math.pow(10, i - 3);
          }

          // this tackles an issue to when numbers were approarching the
          // next nTH place, and not round up properly. 
          // Ex: 999.999M becomes 1B
          if (num >= 9995 * Math.pow(10, i - 4) && num < Math.pow(10, i)) {
            if (num >= 9995000 && num < Math.pow(10, 7) || num >= 9995000000 && num < Math.pow(10, 10) || num >= 9995000000000 && num < Math.pow(10, 13)){
              numFormed = num/Math.pow(10, i - 1);
            } else if (num >= 99999 && num < Math.pow(10, 5) || num >= 99950000 && num < Math.pow(10, 8) || num >= 99950000000 && num < Math.pow(10, 11) || num >= 99950000000000 && num < Math.pow(10, 14)) {
              numFormed = num/Math.pow(10, i - 2);
            } else {
              numFormed = num/Math.pow(10, i);
            }
            
            if (num >= 99999 && num < Math.pow(10, 5)) {
              letter = 'K';
            } else if (num >= 999500 && num < Math.pow(10, 8)) {
              letter = 'M';
            } else if (num >= 999500000 && num < Math.pow(10, 11))  {
              letter = 'B';
            } else if (num >= 999500000000 && num < Math.pow(10, 14)) {
              letter = 'T';
            } else {
              letter = 'Q';
            }
            return numFormed.toFixed(0) + letter;
          }

          // place the decimal point in the correct spot
          // so if the number is 
          // 1,253,502 = 1.25M
          // 12,542,423 = 12.5M
          // 124,634,242 = 125M
          numToString = numDivided.toString();
          if (numToString.toString().charAt(1) === '.') {
            return Number(numToString).toFixed(2) + letter;
          } else if (numToString.toString().charAt(2) === '.') {
            return Number(numToString).toFixed(1) + letter;
          } else if (numToString.charAt(3) === '.') {
            return Number(numToString).toFixed(0) + letter;
          } else {
            return Number(numToString).toFixed(0) + letter;
          }
        }
      }
    };
  }
}());