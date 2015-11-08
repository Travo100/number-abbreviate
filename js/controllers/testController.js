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