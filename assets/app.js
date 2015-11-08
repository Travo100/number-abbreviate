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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL3Rlc3RDb250cm9sbGVyLmpzIiwiZmlsdGVycy9udW1iZXJBYmJyZXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFPLE9BQU8sSUFBSTtBQ0RwQixDQUFDLFVBQVU7SUFDUDtTQUNLLE9BQU87U0FDUCxXQUFXLGtCQUFrQjs7UUFFOUIsU0FBUyxpQkFBaUI7WUFDdEIsSUFBSSxLQUFLO1lBQ1QsR0FBRyxVQUFVO1lBQ2IsR0FBRyxhQUFhO1lBQ2hCLEdBQUcsaUJBQWlCOztLQUUzQjtBQ1hMO0dBQ0csT0FBTztHQUNQLE9BQU8sZ0JBQWdCO0VBQ3hCLFNBQVMsZUFBZTtJQUN0QixJQUFJO0lBQ0osT0FBTyxTQUFTLEtBQUs7Ozs7SUFJckIsSUFBSSxPQUFPLEtBQUssSUFBSSxJQUFJLE1BQU0sTUFBTSxLQUFLLElBQUksSUFBSSxHQUFHO1FBQ2hELFNBQVM7WUFDTCxJQUFJLE9BQU8sS0FBSyxJQUFJLElBQUksTUFBTSxNQUFNLEtBQUssSUFBSSxJQUFJLEdBQUc7UUFDeEQsU0FBUztZQUNMLElBQUksT0FBTyxLQUFLLElBQUksSUFBSSxNQUFNLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSTtRQUN6RCxTQUFTO1lBQ0wsSUFBSSxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJO1FBQzFELFNBQVM7WUFDTDtRQUNKLFNBQVM7Ozs7Ozs7O01BUVgsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztRQUMzQixNQUFNLE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSTtVQUM1QixJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksSUFBSTtZQUMzQixJQUFJLElBQUksSUFBSSxLQUFLLElBQUksSUFBSTs7VUFFM0IsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sT0FBTyxLQUFLLElBQUksSUFBSSxJQUFJO1lBQ25ELElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUk7O1VBRS9CLGdFQUFnRSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sT0FBTyxLQUFLLElBQUksSUFBSSxLQUFLO1lBQ2hILElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUk7O1VBRS9CLDhEQUE4RCxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sTUFBTSxLQUFLLElBQUksSUFBSSxLQUFLO1lBQzdHLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUk7O1VBRS9CLElBQUksSUFBSSxFQUFFO1VBQ1YsSUFBSSxFQUFFLFdBQVcsT0FBTyxPQUFPLEtBQUs7WUFDbEMsT0FBTyxPQUFPLEdBQUcsUUFBUSxLQUFLO2lCQUN6QixJQUFJLEVBQUUsV0FBVyxPQUFPLE9BQU8sS0FBSztZQUN6QyxPQUFPLE9BQU8sR0FBRyxRQUFRLEtBQUs7aUJBQ3pCLElBQUksRUFBRSxPQUFPLE9BQU8sS0FBSztZQUM5QixPQUFPLE9BQU8sR0FBRyxRQUFRLEtBQUs7aUJBQ3pCO1lBQ0wsT0FBTyxPQUFPLEdBQUcsUUFBUSxLQUFLOzs7Ozs7QUFNMUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhclxuXHQubW9kdWxlKCdhcHAnLCBbXSk7IiwiKGZ1bmN0aW9uKCl7XG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdhcHAnKVxuICAgICAgICAuY29udHJvbGxlcigndGVzdENvbnRyb2xsZXInLCB0ZXN0Q29udHJvbGxlcik7XG5cbiAgICAgICAgZnVuY3Rpb24gdGVzdENvbnRyb2xsZXIoKSB7XG4gICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgICAgdm0ubWlsbGlvbiA9IDEwMDAwMDA7XG4gICAgICAgICAgICB2bS50ZW5taWxsaW9uID0gMTAwMDAwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkbWlsbGlvbiA9IDEwMDAwMDAwMDtcbiAgICAgICAgfVxufSgpKTsiLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ2FwcCcpXG4gIC5maWx0ZXIoJ251bWJlckFiYnJldicsIG51bWJlckFiYnJldik7XG4gIGZ1bmN0aW9uIG51bWJlckFiYnJldigpIHtcbiAgICB2YXIgbGV0dGVyO1xuICAgIHJldHVybiBmdW5jdGlvbihudW0pIHtcbiAgICBcbiAgICAvLyBnaXZlIHRoZSBudW1iZXIgdGhlIGNvcnJlY3QgZGVzaWduYXRvciwgYmFzZWQgb24gaXRzIG9yaWdpbmFsIHZhbHVlIGFuZCB1cCAxMDB0aCB0cmlsbGlvblxuICAgIC8vIGllIDogMTAsMDAwID0gMTBLLCAxLDAwMCwwMDAgPSAxTSwgMSwwMDAsMDAwLDAwMCA9IDFCLCAxLDAwMCwwMDAsMDAwLDAwMCA9IDFUXG4gICAgaWYgKG51bSA+PSBNYXRoLnBvdygxMCwgNCkgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDYpKXtcbiAgICAgICAgbGV0dGVyID0gJ0snO1xuICAgICB9IGVsc2UgaWYgKG51bSA+PSBNYXRoLnBvdygxMCwgNikgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDkpKXtcbiAgICAgICAgbGV0dGVyID0gJ00nO1xuICAgICB9IGVsc2UgaWYgKG51bSA+PSBNYXRoLnBvdygxMCwgOSkgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDEyKSl7XG4gICAgICAgIGxldHRlciA9ICdCJztcbiAgICAgfSBlbHNlIGlmIChudW0gPj0gTWF0aC5wb3coMTAsIDEyKSAmJiBudW0gPCBNYXRoLnBvdygxMCwgMTUpKXtcbiAgICAgICAgbGV0dGVyID0gJ1QnO1xuICAgICB9IGVsc2Uge1xuICAgICAgICBsZXR0ZXIgPSAnJztcbiAgICAgfVxuXG4gICAgICAvLyBwbGFjZSB0aGUgZGVjaW1hbCBwb2ludCBpbiB0aGUgY29ycmVjdCBzcG90XG4gICAgICAvLyBzbyBpZiB0aGUgbnVtYmVyIGlzIFxuICAgICAgLy8gMSwyNTMsNTAyID0gMS4zTVxuICAgICAgLy8gMTIsNTQyLDQyMyA9IDEyLjVNXG4gICAgICAvLyAxMjQsNjM0LDI0MiA9IDEyNU1cbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMTY7IGkrKykge1xuICAgICAgICB3aGlsZShudW0gPD0gTWF0aC5wb3coMTAsIGkpKSB7XG4gICAgICAgICAgaWYgKG51bSA9PT0gTWF0aC5wb3coMTAsIDYpKSB7XG4gICAgICAgICAgICB2YXIgeSA9IG51bS9NYXRoLnBvdygxMCwgaSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChudW0gPiBNYXRoLnBvdygxMCwgNikgJiYgbnVtIDw9IE1hdGgucG93KDEwLCA3KSkge1xuICAgICAgICAgICAgdmFyIHkgPSBudW0vTWF0aC5wb3coMTAsIGkgLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCAvKihudW0gPj0gTWF0aC5wb3coMTAsIDQpICYmIG51bSA8PSBNYXRoLnBvdygxMCwgNSkpIHx8ICovIG51bSA+IE1hdGgucG93KDEwLCA3KSAmJiBudW0gPD0gTWF0aC5wb3coMTAsIDgpICkge1xuICAgICAgICAgICAgdmFyIHkgPSBudW0vTWF0aC5wb3coMTAsIGkgLSAyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCAvKihudW0gPiBNYXRoLnBvdygxMCwgNSkgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDYpKSB8fCAqLyBudW0gPiBNYXRoLnBvdygxMCwgOCkgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDkpICkge1xuICAgICAgICAgICAgdmFyIHkgPSBudW0vTWF0aC5wb3coMTAsIGkgLSAzKTtcbiAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICAgIHZhciB4ID0geS50b1N0cmluZygpO1xuICAgICAgICAgIGlmICh4LnRvU3RyaW5nKCkuY2hhckF0KDEpID09PSBcIi5cIikge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcih4KS50b0ZpeGVkKDIpICsgbGV0dGVyO1xuICAgICAgICAgIH0gZWxzZSBpZiAoeC50b1N0cmluZygpLmNoYXJBdCgyKSA9PT0gXCIuXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoeCkudG9GaXhlZCgxKSArIGxldHRlcjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHguY2hhckF0KDMpID09PSBcIi5cIikge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcih4KS50b0ZpeGVkKDApICsgbGV0dGVyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHgpLnRvRml4ZWQoMCkgKyBsZXR0ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=