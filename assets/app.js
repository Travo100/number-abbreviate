angular
	.module('app', []);
(function(){
    angular
        .module('app')
        .controller('testController', testController);

        function testController() {
            var vm = this;
            vm.million = 1000000;
            vm.tenmillion = 10000000;
            vm.hundredmillion = 100000000;
            vm.milliontwentyfive = 1250000;
            vm.tenmilliontwentyfive = 12500000;
            vm.hundredmilliontwentyfive = 125000000;
            vm.millionnine = 9999000;
            vm.tenmillionnine = 99999999;
            vm.hundredmillionnine = 999999999;
        }
}());
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
          if (num >= 9999000 && num < Math.pow(10, 7)) {
            var y = num/Math.pow(10, i);
            letter = 'B';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL3Rlc3RDb250cm9sbGVyLmpzIiwiZmlsdGVycy9udW1iZXJBYmJyZXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFPLE9BQU8sSUFBSTtBQ0RwQixDQUFDLFVBQVU7SUFDUDtTQUNLLE9BQU87U0FDUCxXQUFXLGtCQUFrQjs7UUFFOUIsU0FBUyxpQkFBaUI7WUFDdEIsSUFBSSxLQUFLO1lBQ1QsR0FBRyxVQUFVO1lBQ2IsR0FBRyxhQUFhO1lBQ2hCLEdBQUcsaUJBQWlCO1lBQ3BCLEdBQUcsb0JBQW9CO1lBQ3ZCLEdBQUcsdUJBQXVCO1lBQzFCLEdBQUcsMkJBQTJCO1lBQzlCLEdBQUcsY0FBYztZQUNqQixHQUFHLGlCQUFpQjtZQUNwQixHQUFHLHFCQUFxQjs7S0FFL0I7QUNqQkw7R0FDRyxPQUFPO0dBQ1AsT0FBTyxnQkFBZ0I7RUFDeEIsU0FBUyxlQUFlO0lBQ3RCLElBQUk7SUFDSixPQUFPLFNBQVMsS0FBSzs7OztJQUlyQixJQUFJLE9BQU8sS0FBSyxJQUFJLElBQUksTUFBTSxNQUFNLEtBQUssSUFBSSxJQUFJLEdBQUc7UUFDaEQsU0FBUztZQUNMLElBQUksT0FBTyxLQUFLLElBQUksSUFBSSxNQUFNLE1BQU0sS0FBSyxJQUFJLElBQUksR0FBRztRQUN4RCxTQUFTO1lBQ0wsSUFBSSxPQUFPLEtBQUssSUFBSSxJQUFJLE1BQU0sTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJO1FBQ3pELFNBQVM7WUFDTCxJQUFJLE9BQU8sS0FBSyxJQUFJLElBQUksT0FBTyxNQUFNLEtBQUssSUFBSSxJQUFJLElBQUk7UUFDMUQsU0FBUztZQUNMO1FBQ0osU0FBUzs7Ozs7Ozs7TUFRWCxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO1FBQzNCLE1BQU0sT0FBTyxLQUFLLElBQUksSUFBSSxJQUFJO1VBQzVCLElBQUksUUFBUSxLQUFLLElBQUksSUFBSSxJQUFJO1lBQzNCLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJOztVQUUzQixJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxPQUFPLEtBQUssSUFBSSxJQUFJLElBQUk7WUFDbkQsSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSTs7VUFFL0IsZ0VBQWdFLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxPQUFPLEtBQUssSUFBSSxJQUFJLEtBQUs7WUFDaEgsSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSTs7VUFFL0IsOERBQThELE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxNQUFNLEtBQUssSUFBSSxJQUFJLEtBQUs7WUFDN0csSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSTs7VUFFL0IsSUFBSSxPQUFPLFdBQVcsTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJO1lBQzNDLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJO1lBQ3pCLFNBQVM7O1VBRVgsSUFBSSxJQUFJLEVBQUU7VUFDVixJQUFJLEVBQUUsV0FBVyxPQUFPLE9BQU8sS0FBSztZQUNsQyxPQUFPLE9BQU8sR0FBRyxRQUFRLEtBQUs7aUJBQ3pCLElBQUksRUFBRSxXQUFXLE9BQU8sT0FBTyxLQUFLO1lBQ3pDLE9BQU8sT0FBTyxHQUFHLFFBQVEsS0FBSztpQkFDekIsSUFBSSxFQUFFLE9BQU8sT0FBTyxLQUFLO1lBQzlCLE9BQU8sT0FBTyxHQUFHLFFBQVEsS0FBSztpQkFDekI7WUFDTCxPQUFPLE9BQU8sR0FBRyxRQUFRLEtBQUs7Ozs7OztBQU0xQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG5cdC5tb2R1bGUoJ2FwcCcsIFtdKTsiLCIoZnVuY3Rpb24oKXtcbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ2FwcCcpXG4gICAgICAgIC5jb250cm9sbGVyKCd0ZXN0Q29udHJvbGxlcicsIHRlc3RDb250cm9sbGVyKTtcblxuICAgICAgICBmdW5jdGlvbiB0ZXN0Q29udHJvbGxlcigpIHtcbiAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICAgICAgICB2bS5taWxsaW9uID0gMTAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbm1pbGxpb24gPSAxMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLmh1bmRyZWRtaWxsaW9uID0gMTAwMDAwMDAwO1xuICAgICAgICAgICAgdm0ubWlsbGlvbnR3ZW50eWZpdmUgPSAxMjUwMDAwO1xuICAgICAgICAgICAgdm0udGVubWlsbGlvbnR3ZW50eWZpdmUgPSAxMjUwMDAwMDtcbiAgICAgICAgICAgIHZtLmh1bmRyZWRtaWxsaW9udHdlbnR5Zml2ZSA9IDEyNTAwMDAwMDtcbiAgICAgICAgICAgIHZtLm1pbGxpb25uaW5lID0gOTk5OTAwMDtcbiAgICAgICAgICAgIHZtLnRlbm1pbGxpb25uaW5lID0gOTk5OTk5OTk7XG4gICAgICAgICAgICB2bS5odW5kcmVkbWlsbGlvbm5pbmUgPSA5OTk5OTk5OTk7XG4gICAgICAgIH1cbn0oKSk7IiwiYW5ndWxhclxuICAubW9kdWxlKCdhcHAnKVxuICAuZmlsdGVyKCdudW1iZXJBYmJyZXYnLCBudW1iZXJBYmJyZXYpO1xuICBmdW5jdGlvbiBudW1iZXJBYmJyZXYoKSB7XG4gICAgdmFyIGxldHRlcjtcbiAgICByZXR1cm4gZnVuY3Rpb24obnVtKSB7XG4gICAgXG4gICAgLy8gZ2l2ZSB0aGUgbnVtYmVyIHRoZSBjb3JyZWN0IGRlc2lnbmF0b3IsIGJhc2VkIG9uIGl0cyBvcmlnaW5hbCB2YWx1ZSBhbmQgdXAgMTAwdGggdHJpbGxpb25cbiAgICAvLyBpZSA6IDEwLDAwMCA9IDEwSywgMSwwMDAsMDAwID0gMU0sIDEsMDAwLDAwMCwwMDAgPSAxQiwgMSwwMDAsMDAwLDAwMCwwMDAgPSAxVFxuICAgIGlmIChudW0gPj0gTWF0aC5wb3coMTAsIDQpICYmIG51bSA8IE1hdGgucG93KDEwLCA2KSl7XG4gICAgICAgIGxldHRlciA9ICdLJztcbiAgICAgfSBlbHNlIGlmIChudW0gPj0gTWF0aC5wb3coMTAsIDYpICYmIG51bSA8IE1hdGgucG93KDEwLCA5KSl7XG4gICAgICAgIGxldHRlciA9ICdNJztcbiAgICAgfSBlbHNlIGlmIChudW0gPj0gTWF0aC5wb3coMTAsIDkpICYmIG51bSA8IE1hdGgucG93KDEwLCAxMikpe1xuICAgICAgICBsZXR0ZXIgPSAnQic7XG4gICAgIH0gZWxzZSBpZiAobnVtID49IE1hdGgucG93KDEwLCAxMikgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDE1KSl7XG4gICAgICAgIGxldHRlciA9ICdUJztcbiAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0dGVyID0gJyc7XG4gICAgIH1cblxuICAgICAgLy8gcGxhY2UgdGhlIGRlY2ltYWwgcG9pbnQgaW4gdGhlIGNvcnJlY3Qgc3BvdFxuICAgICAgLy8gc28gaWYgdGhlIG51bWJlciBpcyBcbiAgICAgIC8vIDEsMjUzLDUwMiA9IDEuM01cbiAgICAgIC8vIDEyLDU0Miw0MjMgPSAxMi41TVxuICAgICAgLy8gMTI0LDYzNCwyNDIgPSAxMjVNXG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgd2hpbGUobnVtIDw9IE1hdGgucG93KDEwLCBpKSkge1xuICAgICAgICAgIGlmIChudW0gPT09IE1hdGgucG93KDEwLCA2KSkge1xuICAgICAgICAgICAgdmFyIHkgPSBudW0vTWF0aC5wb3coMTAsIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobnVtID4gTWF0aC5wb3coMTAsIDYpICYmIG51bSA8PSBNYXRoLnBvdygxMCwgNykpIHtcbiAgICAgICAgICAgIHZhciB5ID0gbnVtL01hdGgucG93KDEwLCBpIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICggLyoobnVtID49IE1hdGgucG93KDEwLCA0KSAmJiBudW0gPD0gTWF0aC5wb3coMTAsIDUpKSB8fCAqLyBudW0gPiBNYXRoLnBvdygxMCwgNykgJiYgbnVtIDw9IE1hdGgucG93KDEwLCA4KSApIHtcbiAgICAgICAgICAgIHZhciB5ID0gbnVtL01hdGgucG93KDEwLCBpIC0gMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICggLyoobnVtID4gTWF0aC5wb3coMTAsIDUpICYmIG51bSA8IE1hdGgucG93KDEwLCA2KSkgfHwgKi8gbnVtID4gTWF0aC5wb3coMTAsIDgpICYmIG51bSA8IE1hdGgucG93KDEwLCA5KSApIHtcbiAgICAgICAgICAgIHZhciB5ID0gbnVtL01hdGgucG93KDEwLCBpIC0gMyk7XG4gICAgICAgICAgfSAgIFxuICAgICAgICAgIGlmIChudW0gPj0gOTk5OTAwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgNykpIHtcbiAgICAgICAgICAgIHZhciB5ID0gbnVtL01hdGgucG93KDEwLCBpKTtcbiAgICAgICAgICAgIGxldHRlciA9ICdCJztcbiAgICAgICAgICB9ICAgICAgIFxuICAgICAgICAgIHZhciB4ID0geS50b1N0cmluZygpO1xuICAgICAgICAgIGlmICh4LnRvU3RyaW5nKCkuY2hhckF0KDEpID09PSBcIi5cIikge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcih4KS50b0ZpeGVkKDIpICsgbGV0dGVyO1xuICAgICAgICAgIH0gZWxzZSBpZiAoeC50b1N0cmluZygpLmNoYXJBdCgyKSA9PT0gXCIuXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoeCkudG9GaXhlZCgxKSArIGxldHRlcjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHguY2hhckF0KDMpID09PSBcIi5cIikge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcih4KS50b0ZpeGVkKDApICsgbGV0dGVyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHgpLnRvRml4ZWQoMCkgKyBsZXR0ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=