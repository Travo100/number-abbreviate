angular
	.module('app', []);
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
            vm.trillionnine = 999500000000;
            vm.tentrillionnine = 99999999999000;
            vm.hundredtrillionnine = 999999999999000;
        }
}());
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
          // if (num >= 99999 && num < Math.pow(10, 5)) {
          //   numFormed = num/Math.pow(10, i - 2);
          //   letter = 'K';
          //   return numFormed.toFixed(0) + letter;
          // }
          
          // working on making this more concise with a loop
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
          
          // if (num >= 999500 && num < Math.pow(10, 6)) {
          //   numFormed = num/Math.pow(10, i);
          //   letter = 'M';
          //   return numFormed.toFixed(0) + letter;
          // } 
          

          // // million rounding up to billions
          // if (num >= 9995000 && num < Math.pow(10, 7)) {
          //   numFormed = num / Math.pow(10, i - 1);
          //   letter = 'M';
          //   return numFormed.toFixed(0) + letter;
          // }
          // if (num >= 99950000 && num < Math.pow(10, 8)) {
          //   numFormed = num / Math.pow(10, i - 2);
          //   letter = 'M';
          //   return numFormed.toFixed(0) + letter;
          // }
          // if (num >= 999500000 && num < Math.pow(10, 9)) {
          //   numFormed = num / Math.pow(10, i);
          //   letter = 'B';
          //   return numFormed.toFixed(0) + letter;
          // }

          // // billions rounding up to trillions
          // if (num >= 9995000000 && num < Math.pow(10, 10)) {
          //   numFormed = num / Math.pow(10, i - 1);
          //   letter = 'B';
          //   return numFormed.toFixed(0) + letter;
          // }
          // if (num >= 99950000000 && num < Math.pow(10, 11)) {
          //   numFormed = num / Math.pow(10, i - 2);
          //   letter = 'B';
          //   return numFormed.toFixed(0) + letter;
          // }
          // if (num >= 999500000000 && num < Math.pow(10, 12)) {
          //   numFormed = num / Math.pow(10, i);
          //   letter = 'T';
          //   return numFormed.toFixed(0) + letter;
          // }

          // // trillions rounding up to quadrillions
          // if (num >= 9995000000000 && num < Math.pow(10, 13)) {
          //   numFormed = num / Math.pow(10, i - 1);
          //   letter = 'T';
          //   return numFormed.toFixed(0) + letter;
          // }
          // if (num >= 99950000000000 && num < Math.pow(10, 14)) {
          //   numFormed = num / Math.pow(10, i - 2);
          //   letter = 'T';
          //   return numFormed.toFixed(0) + letter;
          // }
          // if (num >= 999500000000000 && num < Math.pow(10, 15)) {
          //   numFormed = num / Math.pow(10, i);
          //   letter = 'Q';
          //   return numFormed.toFixed(0) + letter;
          // }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL3Rlc3RDb250cm9sbGVyLmpzIiwiZmlsdGVycy9udW1iZXJBYmJyZXZpYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBTyxPQUFPLElBQUk7QUNEcEIsQ0FBQyxVQUFVO0lBQ1A7U0FDSyxPQUFPO1NBQ1AsV0FBVyxrQkFBa0I7O1FBRTlCLFNBQVMsaUJBQWlCO1lBQ3RCLElBQUksS0FBSzs7WUFFVCxHQUFHLFdBQVc7WUFDZCxHQUFHLGNBQWM7WUFDakIsR0FBRyxrQkFBa0I7WUFDckIsR0FBRyxxQkFBcUI7WUFDeEIsR0FBRyx3QkFBd0I7WUFDM0IsR0FBRyw0QkFBNEI7WUFDL0IsR0FBRyxlQUFlO1lBQ2xCLEdBQUcsa0JBQWtCO1lBQ3JCLEdBQUcsc0JBQXNCO1lBQ3pCLEdBQUcsb0JBQW9CO1lBQ3ZCLEdBQUcsdUJBQXVCO1lBQzFCLEdBQUcsMkJBQTJCO1lBQzlCLEdBQUcsZ0JBQWdCO1lBQ25CLEdBQUcsbUJBQW1CO1lBQ3RCLEdBQUcsdUJBQXVCO1lBQzFCLEdBQUcsZUFBZTtZQUNsQixHQUFHLGtCQUFrQjtZQUNyQixHQUFHLHNCQUFzQjs7WUFFekIsR0FBRyxVQUFVO1lBQ2IsR0FBRyxhQUFhO1lBQ2hCLEdBQUcsaUJBQWlCO1lBQ3BCLEdBQUcsb0JBQW9CO1lBQ3ZCLEdBQUcsdUJBQXVCO1lBQzFCLEdBQUcsMkJBQTJCO1lBQzlCLEdBQUcsY0FBYztZQUNqQixHQUFHLGlCQUFpQjtZQUNwQixHQUFHLHFCQUFxQjtZQUN4QixHQUFHLG1CQUFtQjtZQUN0QixHQUFHLHNCQUFzQjtZQUN6QixHQUFHLDBCQUEwQjtZQUM3QixHQUFHLGVBQWU7WUFDbEIsR0FBRyxrQkFBa0I7WUFDckIsR0FBRyxzQkFBc0I7WUFDekIsR0FBRyxjQUFjO1lBQ2pCLEdBQUcsaUJBQWlCO1lBQ3BCLEdBQUcscUJBQXFCOztZQUV4QixHQUFHLFVBQVU7WUFDYixHQUFHLGFBQWE7WUFDaEIsR0FBRyxp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QixNQUFNLEtBQUssSUFBSSxJQUFJLEtBQUs7Z0JBQ3hELFNBQVM7cUJBQ0o7Z0JBQ0wsU0FBUzs7Y0FFWCxPQUFPLFVBQVUsUUFBUSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFrRWxDLGNBQWMsV0FBVztVQUN6QixJQUFJLFlBQVksV0FBVyxPQUFPLE9BQU8sS0FBSztZQUM1QyxPQUFPLE9BQU8sYUFBYSxRQUFRLEtBQUs7aUJBQ25DLElBQUksWUFBWSxXQUFXLE9BQU8sT0FBTyxLQUFLO1lBQ25ELE9BQU8sT0FBTyxhQUFhLFFBQVEsS0FBSztpQkFDbkMsSUFBSSxZQUFZLE9BQU8sT0FBTyxLQUFLO1lBQ3hDLE9BQU8sT0FBTyxhQUFhLFFBQVEsS0FBSztpQkFDbkM7WUFDTCxPQUFPLE9BQU8sYUFBYSxRQUFRLEtBQUs7Ozs7OztLQU0vQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG5cdC5tb2R1bGUoJ2FwcCcsIFtdKTsiLCIoZnVuY3Rpb24oKXtcbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ2FwcCcpXG4gICAgICAgIC5jb250cm9sbGVyKCd0ZXN0Q29udHJvbGxlcicsIHRlc3RDb250cm9sbGVyKTtcblxuICAgICAgICBmdW5jdGlvbiB0ZXN0Q29udHJvbGxlcigpIHtcbiAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZtLnRob3VzYW5kID0gMTAwMDtcbiAgICAgICAgICAgIHZtLnRlbnRob3VzYW5kID0gMTAwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkdGhvdXNhbmQgPSAxMDAwMDA7XG4gICAgICAgICAgICB2bS50aG91c2FuZHR3ZW50eWZpdmUgPSAxMjUwO1xuICAgICAgICAgICAgdm0udGVudGhvdXNhbmR0d2VudHlmaXZlID0gMTI1MDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkdGhvdXNhbmR0d2VudHlmaXZlID0gMTI1MDAwO1xuICAgICAgICAgICAgdm0udGhvdXNhbmRmaXZlID0gMTUwMDtcbiAgICAgICAgICAgIHZtLnRlbnRob3VzYW5kZml2ZSA9IDE1MDAwO1xuICAgICAgICAgICAgdm0uaHVuZHJlZHRob3VzYW5kZml2ZSA9IDE1MDAwMDtcbiAgICAgICAgICAgIHZtLnRob3VzYW5kc2V2ZW5maXZlID0gMTc1MDtcbiAgICAgICAgICAgIHZtLnRlbnRob3VzYW5kc2V2ZW5maXZlID0gMTc1MDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkdGhvdXNhbmRzZXZlbmZpdmUgPSAxNzUwMDA7XG4gICAgICAgICAgICB2bS50aG91c2FuZGVpZ2h0ID0gMTgwMDtcbiAgICAgICAgICAgIHZtLnRlbnRob3VzYW5kZWlnaHQgPSAxODAwMDtcbiAgICAgICAgICAgIHZtLmh1bmRyZWR0aG91c2FuZGVpZ2h0ID0gMTgwMDAwO1xuICAgICAgICAgICAgdm0udGhvdXNhbmRuaW5lID0gOTk5OTtcbiAgICAgICAgICAgIHZtLnRlbnRob3VzYW5kbmluZSA9IDk5OTk5O1xuICAgICAgICAgICAgdm0uaHVuZHJlZHRob3VzYW5kbmluZSA9IDk5OTUwMTtcblxuICAgICAgICAgICAgdm0ubWlsbGlvbiA9IDEwMDAwMDA7XG4gICAgICAgICAgICB2bS50ZW5taWxsaW9uID0gMTAwMDAwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkbWlsbGlvbiA9IDEwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLm1pbGxpb250d2VudHlmaXZlID0gMTI1MDAwMDtcbiAgICAgICAgICAgIHZtLnRlbm1pbGxpb250d2VudHlmaXZlID0gMTI1MDAwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkbWlsbGlvbnR3ZW50eWZpdmUgPSAxMjUwMDAwMDA7XG4gICAgICAgICAgICB2bS5taWxsaW9uZml2ZSA9IDE1MDAwMDA7XG4gICAgICAgICAgICB2bS50ZW5taWxsaW9uZml2ZSA9IDE1MDAwMDAwO1xuICAgICAgICAgICAgdm0uaHVuZHJlZG1pbGxpb25maXZlID0gMTUwMDAwMDAwO1xuICAgICAgICAgICAgdm0ubWlsbGlvbnNldmVuZml2ZSA9IDE3NTAwMDA7XG4gICAgICAgICAgICB2bS50ZW5taWxsaW9uc2V2ZW5maXZlID0gMTc1MDAwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkbWlsbGlvbnNldmVuZml2ZSA9IDE3NTAwMDAwMDtcbiAgICAgICAgICAgIHZtLm1pbGxpb25laWdodCA9IDE4MDAwMDA7XG4gICAgICAgICAgICB2bS50ZW5taWxsaW9uZWlnaHQgPSAxODAwMDAwMDtcbiAgICAgICAgICAgIHZtLmh1bmRyZWRtaWxsaW9uZWlnaHQgPSAxODAwMDAwMDA7XG4gICAgICAgICAgICB2bS5taWxsaW9ubmluZSA9IDk5OTkwMDA7XG4gICAgICAgICAgICB2bS50ZW5taWxsaW9ubmluZSA9IDk5OTk2MDAwO1xuICAgICAgICAgICAgdm0uaHVuZHJlZG1pbGxpb25uaW5lID0gOTk5OTk5OTk5O1xuXG4gICAgICAgICAgICB2bS5iaWxsaW9uID0gMTAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbmJpbGxpb24gPSAxMDAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLmh1bmRyZWRiaWxsaW9uID0gMTAwMDAwMDAwMDAwO1xuICAgICAgICAgICAgdm0uYmlsbGlvbnR3ZW50eWZpdmUgPSAxMjUwMDAwMDAwO1xuICAgICAgICAgICAgdm0udGVuYmlsbGlvbnR3ZW50eWZpdmUgPSAxMjUwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLmh1bmRyZWRiaWxsaW9udHdlbnR5Zml2ZSA9IDEyNTAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLmJpbGxpb25maXZlID0gMTUwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbmJpbGxpb25maXZlID0gMTUwMDAwMDAwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkYmlsbGlvbmZpdmUgPSAxNTAwMDAwMDAwMDA7XG4gICAgICAgICAgICB2bS5iaWxsaW9uc2V2ZW5maXZlID0gMTc1MDAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbmJpbGxpb25zZXZlbmZpdmUgPSAxNzUwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLmh1bmRyZWRiaWxsaW9uc2V2ZW5maXZlID0gMTc1MDAwMDAwMDAwO1xuICAgICAgICAgICAgdm0uYmlsbGlvbmVpZ2h0ID0gMTgwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbmJpbGxpb25laWdodCA9IDE4MDAwMDAwMDAwO1xuICAgICAgICAgICAgdm0uaHVuZHJlZGJpbGxpb25laWdodCA9IDE4MDAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLmJpbGxpb25uaW5lID0gOTk5OTAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbmJpbGxpb25uaW5lID0gOTk5OTk5OTkwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkYmlsbGlvbm5pbmUgPSA5OTk5OTk5OTkwMDA7XG5cbiAgICAgICAgICAgIHZtLnRyaWxsaW9uID0gMTAwMDAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbnRyaWxsaW9uID0gMTAwMDAwMDAwMDAwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkdHJpbGxpb24gPSAxMDAwMDAwMDAwMDAwMDA7XG4gICAgICAgICAgICB2bS50cmlsbGlvbnR3ZW50eWZpdmUgPSAxMjUwMDAwMDAwMDAwO1xuICAgICAgICAgICAgdm0udGVudHJpbGxpb250d2VudHlmaXZlID0gMTI1MDAwMDAwMDAwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkdHJpbGxpb250d2VudHlmaXZlID0gMTI1MDAwMDAwMDAwMDAwO1xuICAgICAgICAgICAgdm0udHJpbGxpb25maXZlID0gMTUwMDAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbnRyaWxsaW9uZml2ZSA9IDE1MDAwMDAwMDAwMDAwO1xuICAgICAgICAgICAgdm0uaHVuZHJlZHRyaWxsaW9uZml2ZSA9IDE1MDAwMDAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRyaWxsaW9uc2V2ZW5maXZlID0gMTc1MDAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbnRyaWxsaW9uc2V2ZW5maXZlID0gMTc1MDAwMDAwMDAwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkdHJpbGxpb25zZXZlbmZpdmUgPSAxNzUwMDAwMDAwMDAwMDA7XG4gICAgICAgICAgICB2bS50cmlsbGlvbmVpZ2h0ID0gMTgwMDAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbnRyaWxsaW9uZWlnaHQgPSAxODAwMDAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLmh1bmRyZWR0cmlsbGlvbmVpZ2h0ID0gMTgwMDAwMDAwMDAwMDAwO1xuICAgICAgICAgICAgdm0udHJpbGxpb25uaW5lID0gOTk5NTAwMDAwMDAwO1xuICAgICAgICAgICAgdm0udGVudHJpbGxpb25uaW5lID0gOTk5OTk5OTk5OTkwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkdHJpbGxpb25uaW5lID0gOTk5OTk5OTk5OTk5MDAwO1xuICAgICAgICB9XG59KCkpOyIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnYXBwJylcbiAgICAuZmlsdGVyKCdudW1iZXJBYmJyZXZpYXRlJywgbnVtYmVyQWJicmV2aWF0ZSk7XG5cbiAgZnVuY3Rpb24gbnVtYmVyQWJicmV2aWF0ZSgpIHtcbiAgICB2YXIgbGV0dGVyID0gJyc7XG4gICAgdmFyIG51bURpdmlkZWQgPSAwO1xuICAgIHZhciBudW1Gb3JtZWQgPSAwO1xuICAgIHZhciBudW1Ub1N0cmluZyA9ICcnO1xuICAgIHJldHVybiBmdW5jdGlvbihudW0pIHtcbiAgICAgIGlmIChudW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBudW0gPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbnVtID0gbnVtO1xuICAgICAgfVxuICAgICAgLy8gZ2l2ZSB0aGUgbnVtYmVyIHRoZSBjb3JyZWN0IGRlc2lnbmF0b3IsIGJhc2VkIG9uIGl0cyBvcmlnaW5hbCB2YWx1ZSBhbmQgdXAgMTAwdGggdHJpbGxpb25cbiAgICAgIC8vIGllIDogMTAsMDAwID0gMTBLLCAxLDAwMCwwMDAgPSAxTSwgMSwwMDAsMDAwLDAwMCA9IDFCLCAxLDAwMCwwMDAsMDAwLDAwMCA9IDFUXG4gICAgICBpZiAobnVtID49IE1hdGgucG93KDEwLCA0KSAmJiBudW0gPCBNYXRoLnBvdygxMCwgNikpIHtcbiAgICAgICAgbGV0dGVyID0gJ0snO1xuICAgICAgfSBlbHNlIGlmIChudW0gPj0gTWF0aC5wb3coMTAsIDYpICYmIG51bSA8IE1hdGgucG93KDEwLCA5KSkge1xuICAgICAgICBsZXR0ZXIgPSAnTSc7XG4gICAgICB9IGVsc2UgaWYgKG51bSA+PSBNYXRoLnBvdygxMCwgOSkgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDEyKSkge1xuICAgICAgICBsZXR0ZXIgPSAnQic7XG4gICAgICB9IGVsc2UgaWYgKG51bSA+PSBNYXRoLnBvdygxMCwgMTIpICYmIG51bSA8IE1hdGgucG93KDEwLCAxNSkpIHtcbiAgICAgICAgbGV0dGVyID0gJ1QnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0dGVyID0gJyc7XG4gICAgICAgIHJldHVybiBudW0udG9GaXhlZCgwKTtcbiAgICAgIH1cblxuICAgICAgLy8gRG9pbmcgZGl2aXNpb24gb24gdGhlIG51bWJlciB0byBldmVuIGl0IG91dFxuICAgICAgLy8gMTAwMDAwMCAvIE1hdGgucG93KDEwLCA2KSA9PSAxIFxuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIHdoaWxlIChudW0gPD0gTWF0aC5wb3coMTAsIGkpKSB7XG4gICAgICAgICAgaWYgKG51bSA9PT0gTWF0aC5wb3coMTAsIDYpIHx8IG51bSA9PT0gTWF0aC5wb3coMTAsIDkpIHx8IG51bSA9PT0gTWF0aC5wb3coMTAsIDEyKSkge1xuICAgICAgICAgICAgbnVtRGl2aWRlZCA9IG51bSAvIE1hdGgucG93KDEwLCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG51bSA9PT0gTWF0aC5wb3coMTAsIDQpIHx8IG51bSA+IE1hdGgucG93KDEwLCA2KSAmJiBudW0gPD0gTWF0aC5wb3coMTAsIDcpIHx8IG51bSA+IE1hdGgucG93KDEwLCA5KSAmJiBudW0gPD0gTWF0aC5wb3coMTAsIDEwKSB8fCBudW0gPiBNYXRoLnBvdygxMCwgMTIpICYmIG51bSA8PSBNYXRoLnBvdygxMCwgMTMpKSB7XG4gICAgICAgICAgICBudW1EaXZpZGVkID0gbnVtIC8gTWF0aC5wb3coMTAsIGkgLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG51bSA+IE1hdGgucG93KDEwLCA0KSAmJiBudW0gPD0gTWF0aC5wb3coMTAsIDUpIHx8IG51bSA+IE1hdGgucG93KDEwLCA3KSAmJiBudW0gPD0gTWF0aC5wb3coMTAsIDgpIHx8IG51bSA+IE1hdGgucG93KDEwLCAxMCkgJiYgbnVtIDw9IE1hdGgucG93KDEwLCAxMSkgfHwgbnVtID4gTWF0aC5wb3coMTAsIDEzKSAmJiBudW0gPD0gTWF0aC5wb3coMTAsIDE0KSkge1xuICAgICAgICAgICAgbnVtRGl2aWRlZCA9IG51bSAvIE1hdGgucG93KDEwLCBpIC0gMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChudW0gPiBNYXRoLnBvdygxMCwgNSkgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDYpIHx8IG51bSA+IE1hdGgucG93KDEwLCA4KSAmJiBudW0gPCBNYXRoLnBvdygxMCwgOSkgfHwgbnVtID4gTWF0aC5wb3coMTAsIDExKSAmJiBudW0gPCBNYXRoLnBvdygxMCwgMTIpIHx8IG51bSA+IE1hdGgucG93KDEwLCAxNCkgJiYgbnVtIDw9IE1hdGgucG93KDEwLCAxNSkpIHtcbiAgICAgICAgICAgIG51bURpdmlkZWQgPSBudW0gLyBNYXRoLnBvdygxMCwgaSAtIDMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHRob3VzYW5kcyByb3VuZGluZyB1cCB0byBtaWxsaW9uc1xuICAgICAgICAgIC8vIHRoaXMgdGFja2xlIGFuIGlzc3VlIHRvIHdoZW4gbnVtYmVycyB3ZXJlIGFwcHJvYXJjaGluZyB0aGVcbiAgICAgICAgICAvLyBuZXh0IG5USCBwbGFjZSwgYW5kIG5vdCByb3VuZCB1cCBwcm9wZXJseS4gXG4gICAgICAgICAgLy8gRXg6IDk5OS45OTlNIGJlY29tZXMgMUJcbiAgICAgICAgICAvLyBpZiAobnVtID49IDk5OTk5ICYmIG51bSA8IE1hdGgucG93KDEwLCA1KSkge1xuICAgICAgICAgIC8vICAgbnVtRm9ybWVkID0gbnVtL01hdGgucG93KDEwLCBpIC0gMik7XG4gICAgICAgICAgLy8gICBsZXR0ZXIgPSAnSyc7XG4gICAgICAgICAgLy8gICByZXR1cm4gbnVtRm9ybWVkLnRvRml4ZWQoMCkgKyBsZXR0ZXI7XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIFxuICAgICAgICAgIC8vIHdvcmtpbmcgb24gbWFraW5nIHRoaXMgbW9yZSBjb25jaXNlIHdpdGggYSBsb29wXG4gICAgICAgICAgICBpZiAobnVtID49IDk5OTUgKiBNYXRoLnBvdygxMCwgaSAtIDQpICYmIG51bSA8IE1hdGgucG93KDEwLCBpKSkge1xuICAgICAgICAgICAgICBpZiAobnVtID49IDk5OTUwMDAgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDcpIHx8IG51bSA+PSA5OTk1MDAwMDAwICYmIG51bSA8IE1hdGgucG93KDEwLCAxMCkgfHwgbnVtID49IDk5OTUwMDAwMDAwMDAgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDEzKSl7XG4gICAgICAgICAgICAgICAgbnVtRm9ybWVkID0gbnVtL01hdGgucG93KDEwLCBpIC0gMSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtID49IDk5OTk5ICYmIG51bSA8IE1hdGgucG93KDEwLCA1KSB8fCBudW0gPj0gOTk5NTAwMDAgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDgpIHx8IG51bSA+PSA5OTk1MDAwMDAwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgMTEpIHx8IG51bSA+PSA5OTk1MDAwMDAwMDAwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgMTQpKSB7XG4gICAgICAgICAgICAgICAgbnVtRm9ybWVkID0gbnVtL01hdGgucG93KDEwLCBpIC0gMik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbnVtRm9ybWVkID0gbnVtL01hdGgucG93KDEwLCBpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYgKG51bSA+PSA5OTk5OSAmJiBudW0gPCBNYXRoLnBvdygxMCwgNSkpIHtcbiAgICAgICAgICAgICAgICBsZXR0ZXIgPSAnSyc7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtID49IDk5OTUwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgOCkpIHtcbiAgICAgICAgICAgICAgICBsZXR0ZXIgPSAnTSc7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtID49IDk5OTUwMDAwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgMTEpKSAge1xuICAgICAgICAgICAgICAgIGxldHRlciA9ICdCJztcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChudW0gPj0gOTk5NTAwMDAwMDAwICYmIG51bSA8IE1hdGgucG93KDEwLCAxNCkpIHtcbiAgICAgICAgICAgICAgICBsZXR0ZXIgPSAnVCc7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0dGVyID0gJ1EnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBudW1Gb3JtZWQudG9GaXhlZCgwKSArIGxldHRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAvLyBpZiAobnVtID49IDk5OTUwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgNikpIHtcbiAgICAgICAgICAvLyAgIG51bUZvcm1lZCA9IG51bS9NYXRoLnBvdygxMCwgaSk7XG4gICAgICAgICAgLy8gICBsZXR0ZXIgPSAnTSc7XG4gICAgICAgICAgLy8gICByZXR1cm4gbnVtRm9ybWVkLnRvRml4ZWQoMCkgKyBsZXR0ZXI7XG4gICAgICAgICAgLy8gfSBcbiAgICAgICAgICBcblxuICAgICAgICAgIC8vIC8vIG1pbGxpb24gcm91bmRpbmcgdXAgdG8gYmlsbGlvbnNcbiAgICAgICAgICAvLyBpZiAobnVtID49IDk5OTUwMDAgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDcpKSB7XG4gICAgICAgICAgLy8gICBudW1Gb3JtZWQgPSBudW0gLyBNYXRoLnBvdygxMCwgaSAtIDEpO1xuICAgICAgICAgIC8vICAgbGV0dGVyID0gJ00nO1xuICAgICAgICAgIC8vICAgcmV0dXJuIG51bUZvcm1lZC50b0ZpeGVkKDApICsgbGV0dGVyO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAvLyBpZiAobnVtID49IDk5OTUwMDAwICYmIG51bSA8IE1hdGgucG93KDEwLCA4KSkge1xuICAgICAgICAgIC8vICAgbnVtRm9ybWVkID0gbnVtIC8gTWF0aC5wb3coMTAsIGkgLSAyKTtcbiAgICAgICAgICAvLyAgIGxldHRlciA9ICdNJztcbiAgICAgICAgICAvLyAgIHJldHVybiBudW1Gb3JtZWQudG9GaXhlZCgwKSArIGxldHRlcjtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgLy8gaWYgKG51bSA+PSA5OTk1MDAwMDAgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDkpKSB7XG4gICAgICAgICAgLy8gICBudW1Gb3JtZWQgPSBudW0gLyBNYXRoLnBvdygxMCwgaSk7XG4gICAgICAgICAgLy8gICBsZXR0ZXIgPSAnQic7XG4gICAgICAgICAgLy8gICByZXR1cm4gbnVtRm9ybWVkLnRvRml4ZWQoMCkgKyBsZXR0ZXI7XG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgLy8gLy8gYmlsbGlvbnMgcm91bmRpbmcgdXAgdG8gdHJpbGxpb25zXG4gICAgICAgICAgLy8gaWYgKG51bSA+PSA5OTk1MDAwMDAwICYmIG51bSA8IE1hdGgucG93KDEwLCAxMCkpIHtcbiAgICAgICAgICAvLyAgIG51bUZvcm1lZCA9IG51bSAvIE1hdGgucG93KDEwLCBpIC0gMSk7XG4gICAgICAgICAgLy8gICBsZXR0ZXIgPSAnQic7XG4gICAgICAgICAgLy8gICByZXR1cm4gbnVtRm9ybWVkLnRvRml4ZWQoMCkgKyBsZXR0ZXI7XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIC8vIGlmIChudW0gPj0gOTk5NTAwMDAwMDAgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDExKSkge1xuICAgICAgICAgIC8vICAgbnVtRm9ybWVkID0gbnVtIC8gTWF0aC5wb3coMTAsIGkgLSAyKTtcbiAgICAgICAgICAvLyAgIGxldHRlciA9ICdCJztcbiAgICAgICAgICAvLyAgIHJldHVybiBudW1Gb3JtZWQudG9GaXhlZCgwKSArIGxldHRlcjtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgLy8gaWYgKG51bSA+PSA5OTk1MDAwMDAwMDAgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDEyKSkge1xuICAgICAgICAgIC8vICAgbnVtRm9ybWVkID0gbnVtIC8gTWF0aC5wb3coMTAsIGkpO1xuICAgICAgICAgIC8vICAgbGV0dGVyID0gJ1QnO1xuICAgICAgICAgIC8vICAgcmV0dXJuIG51bUZvcm1lZC50b0ZpeGVkKDApICsgbGV0dGVyO1xuICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIC8vIC8vIHRyaWxsaW9ucyByb3VuZGluZyB1cCB0byBxdWFkcmlsbGlvbnNcbiAgICAgICAgICAvLyBpZiAobnVtID49IDk5OTUwMDAwMDAwMDAgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDEzKSkge1xuICAgICAgICAgIC8vICAgbnVtRm9ybWVkID0gbnVtIC8gTWF0aC5wb3coMTAsIGkgLSAxKTtcbiAgICAgICAgICAvLyAgIGxldHRlciA9ICdUJztcbiAgICAgICAgICAvLyAgIHJldHVybiBudW1Gb3JtZWQudG9GaXhlZCgwKSArIGxldHRlcjtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgLy8gaWYgKG51bSA+PSA5OTk1MDAwMDAwMDAwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgMTQpKSB7XG4gICAgICAgICAgLy8gICBudW1Gb3JtZWQgPSBudW0gLyBNYXRoLnBvdygxMCwgaSAtIDIpO1xuICAgICAgICAgIC8vICAgbGV0dGVyID0gJ1QnO1xuICAgICAgICAgIC8vICAgcmV0dXJuIG51bUZvcm1lZC50b0ZpeGVkKDApICsgbGV0dGVyO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAvLyBpZiAobnVtID49IDk5OTUwMDAwMDAwMDAwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgMTUpKSB7XG4gICAgICAgICAgLy8gICBudW1Gb3JtZWQgPSBudW0gLyBNYXRoLnBvdygxMCwgaSk7XG4gICAgICAgICAgLy8gICBsZXR0ZXIgPSAnUSc7XG4gICAgICAgICAgLy8gICByZXR1cm4gbnVtRm9ybWVkLnRvRml4ZWQoMCkgKyBsZXR0ZXI7XG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgLy8gcGxhY2UgdGhlIGRlY2ltYWwgcG9pbnQgaW4gdGhlIGNvcnJlY3Qgc3BvdFxuICAgICAgICAgIC8vIHNvIGlmIHRoZSBudW1iZXIgaXMgXG4gICAgICAgICAgLy8gMSwyNTMsNTAyID0gMS4yNU1cbiAgICAgICAgICAvLyAxMiw1NDIsNDIzID0gMTIuNU1cbiAgICAgICAgICAvLyAxMjQsNjM0LDI0MiA9IDEyNU1cbiAgICAgICAgICBudW1Ub1N0cmluZyA9IG51bURpdmlkZWQudG9TdHJpbmcoKTtcbiAgICAgICAgICBpZiAobnVtVG9TdHJpbmcudG9TdHJpbmcoKS5jaGFyQXQoMSkgPT09ICcuJykge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihudW1Ub1N0cmluZykudG9GaXhlZCgyKSArIGxldHRlcjtcbiAgICAgICAgICB9IGVsc2UgaWYgKG51bVRvU3RyaW5nLnRvU3RyaW5nKCkuY2hhckF0KDIpID09PSAnLicpIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIobnVtVG9TdHJpbmcpLnRvRml4ZWQoMSkgKyBsZXR0ZXI7XG4gICAgICAgICAgfSBlbHNlIGlmIChudW1Ub1N0cmluZy5jaGFyQXQoMykgPT09ICcuJykge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihudW1Ub1N0cmluZykudG9GaXhlZCgwKSArIGxldHRlcjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihudW1Ub1N0cmluZykudG9GaXhlZCgwKSArIGxldHRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59KCkpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==