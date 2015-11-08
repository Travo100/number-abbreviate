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
     }

      // place the decimal point in the correct spot
      // so if the number is 
      // 1,253,502 = 1.3M
      // 12,542,423 = 12.5M
      // 124,634,242 = 125M
      for (var i = 1; i < 16; i++) {
        while(num <= Math.pow(10, i)) {
          if (num === Math.pow(10, 6)) {
            var y = num/Math.pow(10, i);
          }
          if (num > Math.pow(10, 6) && num <= Math.pow(10, 7)) {
            var y = num/Math.pow(10, i - 1);
          }
          if ( /*(num >= Math.pow(10, 4) && num <= Math.pow(10, 5)) || */ num > Math.pow(10, 7) && num <= Math.pow(10, 8) ) {
            var y = num/Math.pow(10, i - 2);
          }
          if ( /*(num > Math.pow(10, 5) && num < Math.pow(10, 6)) || */ num > Math.pow(10, 8) && num < Math.pow(10, 9) ) {
            var y = num/Math.pow(10, i - 3);
          }          
          var x = y.toString();
          if (x.toString().charAt(1) === ".") {
            return Number(x).toFixed(2) + letter;
          } else if (x.toString().charAt(2) === ".") {
            return Number(x).toFixed(1) + letter;
          } else if (x.charAt(3) === ".") {
            return Number(x).toFixed(0) + letter;
          } else {
            return Number(x).toFixed(0) + letter;
          }
        }
      } 
  }
}
