angular
	.module('app', []);
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

          // thousands rounding up to millions
          // this tackle an issue to when numbers were approarching the
          // next nTH place, and not round up properly. 
          // Ex: 999.999M becomes 1B

          if (num >= 99999 && num < Math.pow(10, 5)) {
            numFormed = num / Math.pow(10, i - 2);
            letter = 'K';
            return numFormed.toFixed(0) + letter;
          }
          if (num >= 999500 && num < Math.pow(10, 6)) {
            numFormed = num / Math.pow(10, i);
            letter = 'M';
            return numFormed.toFixed(0) + letter;
          }

          // million rounding up to billions
          if (num >= 9995000 && num < Math.pow(10, 7)) {
            numFormed = num / Math.pow(10, i - 1);
            letter = 'M';
            return numFormed.toFixed(0) + letter;
          }
          if (num >= 99950000 && num < Math.pow(10, 8)) {
            numFormed = num / Math.pow(10, i - 2);
            letter = 'M';
            return numFormed.toFixed(0) + letter;
          }
          if (num >= 999500000 && num < Math.pow(10, 9)) {
            numFormed = num / Math.pow(10, i);
            letter = 'B';
            return numFormed.toFixed(0) + letter;
          }

          // billions rounding up to trillions
          if (num >= 9995000000 && num < Math.pow(10, 10)) {
            numFormed = num / Math.pow(10, i - 1);
            letter = 'B';
            return numFormed.toFixed(0) + letter;
          }
          if (num >= 99950000000 && num < Math.pow(10, 11)) {
            numFormed = num / Math.pow(10, i - 2);
            letter = 'B';
            return numFormed.toFixed(0) + letter;
          }
          if (num >= 999500000000 && num < Math.pow(10, 12)) {
            numFormed = num / Math.pow(10, i);
            letter = 'T';
            return numFormed.toFixed(0) + letter;
          }

          // trillions rounding up to quadrillions
          if (num >= 9995000000000 && num < Math.pow(10, 13)) {
            numFormed = num / Math.pow(10, i - 1);
            letter = 'T';
            return numFormed.toFixed(0) + letter;
          }
          if (num >= 99950000000000 && num < Math.pow(10, 14)) {
            numFormed = num / Math.pow(10, i - 2);
            letter = 'T';
            return numFormed.toFixed(0) + letter;
          }
          if (num >= 999500000000000 && num < Math.pow(10, 15)) {
            numFormed = num / Math.pow(10, i);
            letter = 'Q';
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
(function(){
    angular
        .module('app')
        .controller('testController', testController);

        function testController() {
            var vm = this;
            
            vm.thousand = 1000;
            vm.tenthousand = 10000;
            vm.hundredthousand = 100000;
            vm.thousandtwentyfive = 1250;
            vm.tenthousandtwentyfive = 12500;
            vm.hundredthousandtwentyfive = 125000;
            vm.thousandfive = 1500;
            vm.tenthousandfive = 15000;
            vm.hundredthousandfive = 150000;
            vm.thousandsevenfive = 1750;
            vm.tenthousandsevenfive = 17500;
            vm.hundredthousandsevenfive = 175000;
            vm.thousandeight = 1800;
            vm.tenthousandeight = 18000;
            vm.hundredthousandeight = 180000;
            vm.thousandnine = 9999;
            vm.tenthousandnine = 99999;
            vm.hundredthousandnine = 999501;

            vm.million = 1000000;
            vm.tenmillion = 10000000;
            vm.hundredmillion = 100000000;
            vm.milliontwentyfive = 1250000;
            vm.tenmilliontwentyfive = 12500000;
            vm.hundredmilliontwentyfive = 125000000;
            vm.millionfive = 1500000;
            vm.tenmillionfive = 15000000;
            vm.hundredmillionfive = 150000000;
            vm.millionsevenfive = 1750000;
            vm.tenmillionsevenfive = 17500000;
            vm.hundredmillionsevenfive = 175000000;
            vm.millioneight = 1800000;
            vm.tenmillioneight = 18000000;
            vm.hundredmillioneight = 180000000;
            vm.millionnine = 9999000;
            vm.tenmillionnine = 99996000;
            vm.hundredmillionnine = 999999999;

            vm.billion = 1000000000;
            vm.tenbillion = 10000000000;
            vm.hundredbillion = 100000000000;
            vm.billiontwentyfive = 1250000000;
            vm.tenbilliontwentyfive = 12500000000;
            vm.hundredbilliontwentyfive = 125000000000;
            vm.billionfive = 1500000000;
            vm.tenbillionfive = 15000000000;
            vm.hundredbillionfive = 150000000000;
            vm.billionsevenfive = 1750000000;
            vm.tenbillionsevenfive = 17500000000;
            vm.hundredbillionsevenfive = 175000000000;
            vm.billioneight = 1800000000;
            vm.tenbillioneight = 18000000000;
            vm.hundredbillioneight = 180000000000;
            vm.billionnine = 9999000000;
            vm.tenbillionnine = 99999999000;
            vm.hundredbillionnine = 999999999000;

            vm.trillion = 1000000000000;
            vm.tentrillion = 10000000000000;
            vm.hundredtrillion = 100000000000000;
            vm.trilliontwentyfive = 1250000000000;
            vm.tentrilliontwentyfive = 12500000000000;
            vm.hundredtrilliontwentyfive = 125000000000000;
            vm.trillionfive = 1500000000000;
            vm.tentrillionfive = 15000000000000;
            vm.hundredtrillionfive = 150000000000000;
            vm.trillionsevenfive = 1750000000000;
            vm.tentrillionsevenfive = 17500000000000;
            vm.hundredtrillionsevenfive = 175000000000000;
            vm.trillioneight = 1800000000000;
            vm.tentrillioneight = 18000000000000;
            vm.hundredtrillioneight = 180000000000000;
            vm.trillionnine = 9999999000000;
            vm.tentrillionnine = 99999999999000;
            vm.hundredtrillionnine = 999999999999000;
        }
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImZpbHRlcnMvbnVtYmVyQWJicmV2aWF0ZS5qcyIsImNvbnRyb2xsZXJzL3Rlc3RDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBTyxPQUFPLElBQUk7QUNEcEIsQ0FBQyxXQUFXO0VBQ1Y7RUFDQTtLQUNHLE9BQU87S0FDUCxPQUFPLG9CQUFvQjs7RUFFOUIsU0FBUyxtQkFBbUI7SUFDMUIsSUFBSSxTQUFTO0lBQ2IsSUFBSSxhQUFhO0lBQ2pCLElBQUksWUFBWTtJQUNoQixJQUFJLGNBQWM7SUFDbEIsT0FBTyxTQUFTLEtBQUs7TUFDbkIsSUFBSSxRQUFRLFdBQVc7UUFDckIsTUFBTTthQUNEO1FBQ0wsTUFBTTs7OztNQUlSLElBQUksT0FBTyxLQUFLLElBQUksSUFBSSxNQUFNLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSTtRQUNuRCxTQUFTO2FBQ0osSUFBSSxPQUFPLEtBQUssSUFBSSxJQUFJLE1BQU0sTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJO1FBQzFELFNBQVM7YUFDSixJQUFJLE9BQU8sS0FBSyxJQUFJLElBQUksTUFBTSxNQUFNLEtBQUssSUFBSSxJQUFJLEtBQUs7UUFDM0QsU0FBUzthQUNKLElBQUksT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPLE1BQU0sS0FBSyxJQUFJLElBQUksS0FBSztRQUM1RCxTQUFTO2FBQ0o7UUFDTCxTQUFTO1FBQ1QsT0FBTyxJQUFJLFFBQVE7Ozs7O01BS3JCLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7UUFDM0IsT0FBTyxPQUFPLEtBQUssSUFBSSxJQUFJLElBQUk7VUFDN0IsSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLE1BQU0sUUFBUSxLQUFLLElBQUksSUFBSSxNQUFNLFFBQVEsS0FBSyxJQUFJLElBQUksS0FBSztZQUNsRixhQUFhLE1BQU0sS0FBSyxJQUFJLElBQUk7O1VBRWxDLElBQUksUUFBUSxLQUFLLElBQUksSUFBSSxN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QkFBc0I7O0tBRWhDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcclxuXHQubW9kdWxlKCdhcHAnLCBbXSk7IiwiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdhcHAnKVxyXG4gICAgLmZpbHRlcignbnVtYmVyQWJicmV2aWF0ZScsIG51bWJlckFiYnJldmlhdGUpO1xyXG5cclxuICBmdW5jdGlvbiBudW1iZXJBYmJyZXZpYXRlKCkge1xyXG4gICAgdmFyIGxldHRlciA9ICcnO1xyXG4gICAgdmFyIG51bURpdmlkZWQgPSAwO1xyXG4gICAgdmFyIG51bUZvcm1lZCA9IDA7XHJcbiAgICB2YXIgbnVtVG9TdHJpbmcgPSAnJztcclxuICAgIHJldHVybiBmdW5jdGlvbihudW0pIHtcclxuICAgICAgaWYgKG51bSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbnVtID0gMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBudW0gPSBudW07XHJcbiAgICAgIH1cclxuICAgICAgLy8gZ2l2ZSB0aGUgbnVtYmVyIHRoZSBjb3JyZWN0IGRlc2lnbmF0b3IsIGJhc2VkIG9uIGl0cyBvcmlnaW5hbCB2YWx1ZSBhbmQgdXAgMTAwdGggdHJpbGxpb25cclxuICAgICAgLy8gaWUgOiAxMCwwMDAgPSAxMEssIDEsMDAwLDAwMCA9IDFNLCAxLDAwMCwwMDAsMDAwID0gMUIsIDEsMDAwLDAwMCwwMDAsMDAwID0gMVRcclxuICAgICAgaWYgKG51bSA+PSBNYXRoLnBvdygxMCwgNCkgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDYpKSB7XHJcbiAgICAgICAgbGV0dGVyID0gJ0snO1xyXG4gICAgICB9IGVsc2UgaWYgKG51bSA+PSBNYXRoLnBvdygxMCwgNikgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDkpKSB7XHJcbiAgICAgICAgbGV0dGVyID0gJ00nO1xyXG4gICAgICB9IGVsc2UgaWYgKG51bSA+PSBNYXRoLnBvdygxMCwgOSkgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDEyKSkge1xyXG4gICAgICAgIGxldHRlciA9ICdCJztcclxuICAgICAgfSBlbHNlIGlmIChudW0gPj0gTWF0aC5wb3coMTAsIDEyKSAmJiBudW0gPCBNYXRoLnBvdygxMCwgMTUpKSB7XHJcbiAgICAgICAgbGV0dGVyID0gJ1QnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldHRlciA9ICcnO1xyXG4gICAgICAgIHJldHVybiBudW0udG9GaXhlZCgwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRG9pbmcgZGl2aXNpb24gb24gdGhlIG51bWJlciB0byBldmVuIGl0IG91dFxyXG4gICAgICAvLyAxMDAwMDAwIC8gTWF0aC5wb3coMTAsIDYpID09IDEgXHJcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMTY7IGkrKykge1xyXG4gICAgICAgIHdoaWxlIChudW0gPD0gTWF0aC5wb3coMTAsIGkpKSB7XHJcbiAgICAgICAgICBpZiAobnVtID09PSBNYXRoLnBvdygxMCwgNikgfHwgbnVtID09PSBNYXRoLnBvdygxMCwgOSkgfHwgbnVtID09PSBNYXRoLnBvdygxMCwgMTIpKSB7XHJcbiAgICAgICAgICAgIG51bURpdmlkZWQgPSBudW0gLyBNYXRoLnBvdygxMCwgaSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobnVtID09PSBNYXRoLnBvdygxMCwgNCkgfHwgbnVtID4gTWF0aC5wb3coMTAsIDYpICYmIG51bSA8PSBNYXRoLnBvdygxMCwgNykgfHwgbnVtID4gTWF0aC5wb3coMTAsIDkpICYmIG51bSA8PSBNYXRoLnBvdygxMCwgMTApIHx8IG51bSA+IE1hdGgucG93KDEwLCAxMikgJiYgbnVtIDw9IE1hdGgucG93KDEwLCAxMykpIHtcclxuICAgICAgICAgICAgbnVtRGl2aWRlZCA9IG51bSAvIE1hdGgucG93KDEwLCBpIC0gMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobnVtID4gTWF0aC5wb3coMTAsIDQpICYmIG51bSA8PSBNYXRoLnBvdygxMCwgNSkgfHwgbnVtID4gTWF0aC5wb3coMTAsIDcpICYmIG51bSA8PSBNYXRoLnBvdygxMCwgOCkgfHwgbnVtID4gTWF0aC5wb3coMTAsIDEwKSAmJiBudW0gPD0gTWF0aC5wb3coMTAsIDExKSB8fCBudW0gPiBNYXRoLnBvdygxMCwgMTMpICYmIG51bSA8PSBNYXRoLnBvdygxMCwgMTQpKSB7XHJcbiAgICAgICAgICAgIG51bURpdmlkZWQgPSBudW0gLyBNYXRoLnBvdygxMCwgaSAtIDIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG51bSA+IE1hdGgucG93KDEwLCA1KSAmJiBudW0gPCBNYXRoLnBvdygxMCwgNikgfHwgbnVtID4gTWF0aC5wb3coMTAsIDgpICYmIG51bSA8IE1hdGgucG93KDEwLCA5KSB8fCBudW0gPiBNYXRoLnBvdygxMCwgMTEpICYmIG51bSA8IE1hdGgucG93KDEwLCAxMikgfHwgbnVtID4gTWF0aC5wb3coMTAsIDE0KSAmJiBudW0gPD0gTWF0aC5wb3coMTAsIDE1KSkge1xyXG4gICAgICAgICAgICBudW1EaXZpZGVkID0gbnVtIC8gTWF0aC5wb3coMTAsIGkgLSAzKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyB0aG91c2FuZHMgcm91bmRpbmcgdXAgdG8gbWlsbGlvbnNcclxuICAgICAgICAgIC8vIHRoaXMgdGFja2xlIGFuIGlzc3VlIHRvIHdoZW4gbnVtYmVycyB3ZXJlIGFwcHJvYXJjaGluZyB0aGVcclxuICAgICAgICAgIC8vIG5leHQgblRIIHBsYWNlLCBhbmQgbm90IHJvdW5kIHVwIHByb3Blcmx5LiBcclxuICAgICAgICAgIC8vIEV4OiA5OTkuOTk5TSBiZWNvbWVzIDFCXHJcblxyXG4gICAgICAgICAgaWYgKG51bSA+PSA5OTk5OSAmJiBudW0gPCBNYXRoLnBvdygxMCwgNSkpIHtcclxuICAgICAgICAgICAgbnVtRm9ybWVkID0gbnVtIC8gTWF0aC5wb3coMTAsIGkgLSAyKTtcclxuICAgICAgICAgICAgbGV0dGVyID0gJ0snO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVtRm9ybWVkLnRvRml4ZWQoMCkgKyBsZXR0ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobnVtID49IDk5OTUwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgNikpIHtcclxuICAgICAgICAgICAgbnVtRm9ybWVkID0gbnVtIC8gTWF0aC5wb3coMTAsIGkpO1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSAnTSc7XHJcbiAgICAgICAgICAgIHJldHVybiBudW1Gb3JtZWQudG9GaXhlZCgwKSArIGxldHRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBtaWxsaW9uIHJvdW5kaW5nIHVwIHRvIGJpbGxpb25zXHJcbiAgICAgICAgICBpZiAobnVtID49IDk5OTUwMDAgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDcpKSB7XHJcbiAgICAgICAgICAgIG51bUZvcm1lZCA9IG51bSAvIE1hdGgucG93KDEwLCBpIC0gMSk7XHJcbiAgICAgICAgICAgIGxldHRlciA9ICdNJztcclxuICAgICAgICAgICAgcmV0dXJuIG51bUZvcm1lZC50b0ZpeGVkKDApICsgbGV0dGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG51bSA+PSA5OTk1MDAwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgOCkpIHtcclxuICAgICAgICAgICAgbnVtRm9ybWVkID0gbnVtIC8gTWF0aC5wb3coMTAsIGkgLSAyKTtcclxuICAgICAgICAgICAgbGV0dGVyID0gJ00nO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVtRm9ybWVkLnRvRml4ZWQoMCkgKyBsZXR0ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobnVtID49IDk5OTUwMDAwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgOSkpIHtcclxuICAgICAgICAgICAgbnVtRm9ybWVkID0gbnVtIC8gTWF0aC5wb3coMTAsIGkpO1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSAnQic7XHJcbiAgICAgICAgICAgIHJldHVybiBudW1Gb3JtZWQudG9GaXhlZCgwKSArIGxldHRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBiaWxsaW9ucyByb3VuZGluZyB1cCB0byB0cmlsbGlvbnNcclxuICAgICAgICAgIGlmIChudW0gPj0gOTk5NTAwMDAwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgMTApKSB7XHJcbiAgICAgICAgICAgIG51bUZvcm1lZCA9IG51bSAvIE1hdGgucG93KDEwLCBpIC0gMSk7XHJcbiAgICAgICAgICAgIGxldHRlciA9ICdCJztcclxuICAgICAgICAgICAgcmV0dXJuIG51bUZvcm1lZC50b0ZpeGVkKDApICsgbGV0dGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG51bSA+PSA5OTk1MDAwMDAwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgMTEpKSB7XHJcbiAgICAgICAgICAgIG51bUZvcm1lZCA9IG51bSAvIE1hdGgucG93KDEwLCBpIC0gMik7XHJcbiAgICAgICAgICAgIGxldHRlciA9ICdCJztcclxuICAgICAgICAgICAgcmV0dXJuIG51bUZvcm1lZC50b0ZpeGVkKDApICsgbGV0dGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG51bSA+PSA5OTk1MDAwMDAwMDAgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDEyKSkge1xyXG4gICAgICAgICAgICBudW1Gb3JtZWQgPSBudW0gLyBNYXRoLnBvdygxMCwgaSk7XHJcbiAgICAgICAgICAgIGxldHRlciA9ICdUJztcclxuICAgICAgICAgICAgcmV0dXJuIG51bUZvcm1lZC50b0ZpeGVkKDApICsgbGV0dGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIHRyaWxsaW9ucyByb3VuZGluZyB1cCB0byBxdWFkcmlsbGlvbnNcclxuICAgICAgICAgIGlmIChudW0gPj0gOTk5NTAwMDAwMDAwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgMTMpKSB7XHJcbiAgICAgICAgICAgIG51bUZvcm1lZCA9IG51bSAvIE1hdGgucG93KDEwLCBpIC0gMSk7XHJcbiAgICAgICAgICAgIGxldHRlciA9ICdUJztcclxuICAgICAgICAgICAgcmV0dXJuIG51bUZvcm1lZC50b0ZpeGVkKDApICsgbGV0dGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG51bSA+PSA5OTk1MDAwMDAwMDAwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgMTQpKSB7XHJcbiAgICAgICAgICAgIG51bUZvcm1lZCA9IG51bSAvIE1hdGgucG93KDEwLCBpIC0gMik7XHJcbiAgICAgICAgICAgIGxldHRlciA9ICdUJztcclxuICAgICAgICAgICAgcmV0dXJuIG51bUZvcm1lZC50b0ZpeGVkKDApICsgbGV0dGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG51bSA+PSA5OTk1MDAwMDAwMDAwMDAgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDE1KSkge1xyXG4gICAgICAgICAgICBudW1Gb3JtZWQgPSBudW0gLyBNYXRoLnBvdygxMCwgaSk7XHJcbiAgICAgICAgICAgIGxldHRlciA9ICdRJztcclxuICAgICAgICAgICAgcmV0dXJuIG51bUZvcm1lZC50b0ZpeGVkKDApICsgbGV0dGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIHBsYWNlIHRoZSBkZWNpbWFsIHBvaW50IGluIHRoZSBjb3JyZWN0IHNwb3RcclxuICAgICAgICAgIC8vIHNvIGlmIHRoZSBudW1iZXIgaXMgXHJcbiAgICAgICAgICAvLyAxLDI1Myw1MDIgPSAxLjI1TVxyXG4gICAgICAgICAgLy8gMTIsNTQyLDQyMyA9IDEyLjVNXHJcbiAgICAgICAgICAvLyAxMjQsNjM0LDI0MiA9IDEyNU1cclxuICAgICAgICAgIG51bVRvU3RyaW5nID0gbnVtRGl2aWRlZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgaWYgKG51bVRvU3RyaW5nLnRvU3RyaW5nKCkuY2hhckF0KDEpID09PSAnLicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihudW1Ub1N0cmluZykudG9GaXhlZCgyKSArIGxldHRlcjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAobnVtVG9TdHJpbmcudG9TdHJpbmcoKS5jaGFyQXQoMikgPT09ICcuJykge1xyXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKG51bVRvU3RyaW5nKS50b0ZpeGVkKDEpICsgbGV0dGVyO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChudW1Ub1N0cmluZy5jaGFyQXQoMykgPT09ICcuJykge1xyXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKG51bVRvU3RyaW5nKS50b0ZpeGVkKDApICsgbGV0dGVyO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihudW1Ub1N0cmluZykudG9GaXhlZCgwKSArIGxldHRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59KCkpOyIsIihmdW5jdGlvbigpe1xyXG4gICAgYW5ndWxhclxyXG4gICAgICAgIC5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ3Rlc3RDb250cm9sbGVyJywgdGVzdENvbnRyb2xsZXIpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0ZXN0Q29udHJvbGxlcigpIHtcclxuICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZtLnRob3VzYW5kID0gMTAwMDtcclxuICAgICAgICAgICAgdm0udGVudGhvdXNhbmQgPSAxMDAwMDtcclxuICAgICAgICAgICAgdm0uaHVuZHJlZHRob3VzYW5kID0gMTAwMDAwO1xyXG4gICAgICAgICAgICB2bS50aG91c2FuZHR3ZW50eWZpdmUgPSAxMjUwO1xyXG4gICAgICAgICAgICB2bS50ZW50aG91c2FuZHR3ZW50eWZpdmUgPSAxMjUwMDtcclxuICAgICAgICAgICAgdm0uaHVuZHJlZHRob3VzYW5kdHdlbnR5Zml2ZSA9IDEyNTAwMDtcclxuICAgICAgICAgICAgdm0udGhvdXNhbmRmaXZlID0gMTUwMDtcclxuICAgICAgICAgICAgdm0udGVudGhvdXNhbmRmaXZlID0gMTUwMDA7XHJcbiAgICAgICAgICAgIHZtLmh1bmRyZWR0aG91c2FuZGZpdmUgPSAxNTAwMDA7XHJcbiAgICAgICAgICAgIHZtLnRob3VzYW5kc2V2ZW5maXZlID0gMTc1MDtcclxuICAgICAgICAgICAgdm0udGVudGhvdXNhbmRzZXZlbmZpdmUgPSAxNzUwMDtcclxuICAgICAgICAgICAgdm0uaHVuZHJlZHRob3VzYW5kc2V2ZW5maXZlID0gMTc1MDAwO1xyXG4gICAgICAgICAgICB2bS50aG91c2FuZGVpZ2h0ID0gMTgwMDtcclxuICAgICAgICAgICAgdm0udGVudGhvdXNhbmRlaWdodCA9IDE4MDAwO1xyXG4gICAgICAgICAgICB2bS5odW5kcmVkdGhvdXNhbmRlaWdodCA9IDE4MDAwMDtcclxuICAgICAgICAgICAgdm0udGhvdXNhbmRuaW5lID0gOTk5OTtcclxuICAgICAgICAgICAgdm0udGVudGhvdXNhbmRuaW5lID0gOTk5OTk7XHJcbiAgICAgICAgICAgIHZtLmh1bmRyZWR0aG91c2FuZG5pbmUgPSA5OTk1MDE7XHJcblxyXG4gICAgICAgICAgICB2bS5taWxsaW9uID0gMTAwMDAwMDtcclxuICAgICAgICAgICAgdm0udGVubWlsbGlvbiA9IDEwMDAwMDAwO1xyXG4gICAgICAgICAgICB2bS5odW5kcmVkbWlsbGlvbiA9IDEwMDAwMDAwMDtcclxuICAgICAgICAgICAgdm0ubWlsbGlvbnR3ZW50eWZpdmUgPSAxMjUwMDAwO1xyXG4gICAgICAgICAgICB2bS50ZW5taWxsaW9udHdlbnR5Zml2ZSA9IDEyNTAwMDAwO1xyXG4gICAgICAgICAgICB2bS5odW5kcmVkbWlsbGlvbnR3ZW50eWZpdmUgPSAxMjUwMDAwMDA7XHJcbiAgICAgICAgICAgIHZtLm1pbGxpb25maXZlID0gMTUwMDAwMDtcclxuICAgICAgICAgICAgdm0udGVubWlsbGlvbmZpdmUgPSAxNTAwMDAwMDtcclxuICAgICAgICAgICAgdm0uaHVuZHJlZG1pbGxpb25maXZlID0gMTUwMDAwMDAwO1xyXG4gICAgICAgICAgICB2bS5taWxsaW9uc2V2ZW5maXZlID0gMTc1MDAwMDtcclxuICAgICAgICAgICAgdm0udGVubWlsbGlvbnNldmVuZml2ZSA9IDE3NTAwMDAwO1xyXG4gICAgICAgICAgICB2bS5odW5kcmVkbWlsbGlvbnNldmVuZml2ZSA9IDE3NTAwMDAwMDtcclxuICAgICAgICAgICAgdm0ubWlsbGlvbmVpZ2h0ID0gMTgwMDAwMDtcclxuICAgICAgICAgICAgdm0udGVubWlsbGlvbmVpZ2h0ID0gMTgwMDAwMDA7XHJcbiAgICAgICAgICAgIHZtLmh1bmRyZWRtaWxsaW9uZWlnaHQgPSAxODAwMDAwMDA7XHJcbiAgICAgICAgICAgIHZtLm1pbGxpb25uaW5lID0gOTk5OTAwMDtcclxuICAgICAgICAgICAgdm0udGVubWlsbGlvbm5pbmUgPSA5OTk5NjAwMDtcclxuICAgICAgICAgICAgdm0uaHVuZHJlZG1pbGxpb25uaW5lID0gOTk5OTk5OTk5O1xyXG5cclxuICAgICAgICAgICAgdm0uYmlsbGlvbiA9IDEwMDAwMDAwMDA7XHJcbiAgICAgICAgICAgIHZtLnRlbmJpbGxpb24gPSAxMDAwMDAwMDAwMDtcclxuICAgICAgICAgICAgdm0uaHVuZHJlZGJpbGxpb24gPSAxMDAwMDAwMDAwMDA7XHJcbiAgICAgICAgICAgIHZtLmJpbGxpb250d2VudHlmaXZlID0gMTI1MDAwMDAwMDtcclxuICAgICAgICAgICAgdm0udGVuYmlsbGlvbnR3ZW50eWZpdmUgPSAxMjUwMDAwMDAwMDtcclxuICAgICAgICAgICAgdm0uaHVuZHJlZGJpbGxpb250d2VudHlmaXZlID0gMTI1MDAwMDAwMDAwO1xyXG4gICAgICAgICAgICB2bS5iaWxsaW9uZml2ZSA9IDE1MDAwMDAwMDA7XHJcbiAgICAgICAgICAgIHZtLnRlbmJpbGxpb25maXZlID0gMTUwMDAwMDAwMDA7XHJcbiAgICAgICAgICAgIHZtLmh1bmRyZWRiaWxsaW9uZml2ZSA9IDE1MDAwMDAwMDAwMDtcclxuICAgICAgICAgICAgdm0uYmlsbGlvbnNldmVuZml2ZSA9IDE3NTAwMDAwMDA7XHJcbiAgICAgICAgICAgIHZtLnRlbmJpbGxpb25zZXZlbmZpdmUgPSAxNzUwMDAwMDAwMDtcclxuICAgICAgICAgICAgdm0uaHVuZHJlZGJpbGxpb25zZXZlbmZpdmUgPSAxNzUwMDAwMDAwMDA7XHJcbiAgICAgICAgICAgIHZtLmJpbGxpb25laWdodCA9IDE4MDAwMDAwMDA7XHJcbiAgICAgICAgICAgIHZtLnRlbmJpbGxpb25laWdodCA9IDE4MDAwMDAwMDAwO1xyXG4gICAgICAgICAgICB2bS5odW5kcmVkYmlsbGlvbmVpZ2h0ID0gMTgwMDAwMDAwMDAwO1xyXG4gICAgICAgICAgICB2bS5iaWxsaW9ubmluZSA9IDk5OTkwMDAwMDA7XHJcbiAgICAgICAgICAgIHZtLnRlbmJpbGxpb25uaW5lID0gOTk5OTk5OTkwMDA7XHJcbiAgICAgICAgICAgIHZtLmh1bmRyZWRiaWxsaW9ubmluZSA9IDk5OTk5OTk5OTAwMDtcclxuXHJcbiAgICAgICAgICAgIHZtLnRyaWxsaW9uID0gMTAwMDAwMDAwMDAwMDtcclxuICAgICAgICAgICAgdm0udGVudHJpbGxpb24gPSAxMDAwMDAwMDAwMDAwMDtcclxuICAgICAgICAgICAgdm0uaHVuZHJlZHRyaWxsaW9uID0gMTAwMDAwMDAwMDAwMDAwO1xyXG4gICAgICAgICAgICB2bS50cmlsbGlvbnR3ZW50eWZpdmUgPSAxMjUwMDAwMDAwMDAwO1xyXG4gICAgICAgICAgICB2bS50ZW50cmlsbGlvbnR3ZW50eWZpdmUgPSAxMjUwMDAwMDAwMDAwMDtcclxuICAgICAgICAgICAgdm0uaHVuZHJlZHRyaWxsaW9udHdlbnR5Zml2ZSA9IDEyNTAwMDAwMDAwMDAwMDtcclxuICAgICAgICAgICAgdm0udHJpbGxpb25maXZlID0gMTUwMDAwMDAwMDAwMDtcclxuICAgICAgICAgICAgdm0udGVudHJpbGxpb25maXZlID0gMTUwMDAwMDAwMDAwMDA7XHJcbiAgICAgICAgICAgIHZtLmh1bmRyZWR0cmlsbGlvbmZpdmUgPSAxNTAwMDAwMDAwMDAwMDA7XHJcbiAgICAgICAgICAgIHZtLnRyaWxsaW9uc2V2ZW5maXZlID0gMTc1MDAwMDAwMDAwMDtcclxuICAgICAgICAgICAgdm0udGVudHJpbGxpb25zZXZlbmZpdmUgPSAxNzUwMDAwMDAwMDAwMDtcclxuICAgICAgICAgICAgdm0uaHVuZHJlZHRyaWxsaW9uc2V2ZW5maXZlID0gMTc1MDAwMDAwMDAwMDAwO1xyXG4gICAgICAgICAgICB2bS50cmlsbGlvbmVpZ2h0ID0gMTgwMDAwMDAwMDAwMDtcclxuICAgICAgICAgICAgdm0udGVudHJpbGxpb25laWdodCA9IDE4MDAwMDAwMDAwMDAwO1xyXG4gICAgICAgICAgICB2bS5odW5kcmVkdHJpbGxpb25laWdodCA9IDE4MDAwMDAwMDAwMDAwMDtcclxuICAgICAgICAgICAgdm0udHJpbGxpb25uaW5lID0gOTk5OTk5OTAwMDAwMDtcclxuICAgICAgICAgICAgdm0udGVudHJpbGxpb25uaW5lID0gOTk5OTk5OTk5OTkwMDA7XHJcbiAgICAgICAgICAgIHZtLmh1bmRyZWR0cmlsbGlvbm5pbmUgPSA5OTk5OTk5OTk5OTkwMDA7XHJcbiAgICAgICAgfVxyXG59KCkpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
