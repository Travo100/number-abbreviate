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