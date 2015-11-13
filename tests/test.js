describe('Filters', function(){ //describe your object type
    beforeEach(module('app')); //load module
    
    describe('numberAbbreviate',function(){ //describe your app name
    
        var numberAbbreviate;    
        beforeEach(inject(function($filter){ //initialize your filter
            numberAbbreviate = $filter('numberAbbreviate',{});
        }));
        
        //Less then 10,000
        // for (var i = -1; i < 9999; i++) {
        //   it('Should take the number ' + i + ' and give back ' + i, function(){  //write test
        //     expect(numberAbbreviate(i)).toBe(i.toString()); //pass
        //   }); 
        // }

        it('Should take the number 0 and not give back 1', function(){  //write test
          expect(numberAbbreviate(0)).not.toBe('1'); //pass
        });
        
        // 10,000 to 1,000,000 test
        it('Should take the number 10,000.9999 and give back 10K', function(){  //write test
          expect(numberAbbreviate(10000.9999)).toBe('10.0K'); //pass
        });

        it('Should take the number 10,000 and give back 10K', function(){  //write test
          expect(numberAbbreviate(10000)).toBe('10K'); //pass
        });

        it('Should take the number 10,001 and give back 10.0K', function(){  //write test
          expect(numberAbbreviate(10001)).toBe('10.0K'); //pass
        });

        it('Should take the number 12,500 and give back 12.5K', function(){  //write test
          expect(numberAbbreviate(12500)).toBe('12.5K'); //pass
        });

        it('Should take the number 15,000 and give back 15K', function(){  //write test
          expect(numberAbbreviate(15000)).toBe('15K'); //pass
        });

        it('Should take the number 15,001 and give back 15.0K', function(){  //write test
          expect(numberAbbreviate(15001)).toBe('15.0K'); //pass
        });

        it('Should take the number 17,500 and give back 17.5K', function(){  //write test
          expect(numberAbbreviate(17500)).toBe('17.5K'); //pass
        });

        it('Should take the number 19,999 and give back 20.0K', function(){  //write test
          expect(numberAbbreviate(19999)).toBe('20.0K'); //pass
        });

        it('Should take the number 99,999 and give back 100K', function(){  //write test
          expect(numberAbbreviate(99999)).toBe('100K'); //pass
        });

        it('Should take the number 100,000 and give back 100K', function(){  //write test
          expect(numberAbbreviate(100000)).toBe('100K'); //pass
        });

        //Millions
        it('Should take the number 150,000 and give back 150K', function(){  //write test
          expect(numberAbbreviate(150000)).toBe('150K'); //pass
        });

        it('Should take the number 999,500 and give back 1M', function(){  //write test
          expect(numberAbbreviate(999500)).toBe('1M'); //pass
        });

        it('Should take the number 999,999 and give back 1M', function(){  //write test
          expect(numberAbbreviate(999999)).toBe('1M'); //pass
        });

        it('Should take the number 1,000,000 and give back 1M', function(){  //write test
          expect(numberAbbreviate(1000000)).toBe('1M'); //pass
        });

        it('Should take the number 1,250,000 and give back 1.25M', function(){  //write test
          expect(numberAbbreviate(1250000)).toBe('1.25M'); //pass
        });

        it('Should take the number 1,500,000 and give back 1.50M', function(){  //write test
          expect(numberAbbreviate(1500000)).toBe('1.50M'); //pass
        });

        it('Should take the number 4,295,928 and give back 4.30M', function(){  //write test
          expect(numberAbbreviate(4295928)).toBe('4.30M'); //pass
        });

        it('Should take the number 5,000,000 and give back 5.00M', function(){  //write test
          expect(numberAbbreviate(5000000)).toBe('5M'); //pass
        });

        it('Should take the number 5,000,001 and give back 5.00M', function(){  //write test
          expect(numberAbbreviate(5000001)).toBe('5.00M'); //pass
        });

        it('Should take the number 7,500,000 and give back 7.50M', function(){  //write test
          expect(numberAbbreviate(7500000)).toBe('7.50M'); //pass
        });

        it('Should take the number 9,995,000 and give back 10M', function(){  //write test
          expect(numberAbbreviate(9995000)).toBe('10M'); //pass
        });

        it('Should take the number 9,999,999 and give back 10M', function(){  //write test
          expect(numberAbbreviate(9999999)).toBe('10M'); //pass
        });

        it('Should take the number 10,000,000 and give back 10M', function(){  //write test
          expect(numberAbbreviate(10000000)).toBe('10M'); //pass
        });

        it('Should take the number 12,500,000 and give back 12.5M', function(){  //write test
          expect(numberAbbreviate(12500000)).toBe('12.5M'); //pass
        });

        it('Should take the number 12,500,001 and give back 12.5M', function(){  //write test
          expect(numberAbbreviate(12500001)).toBe('12.5M'); //pass
        });

        it('Should take the number 17,500,000 and give back 17.5M', function(){  //write test
          expect(numberAbbreviate(17500000)).toBe('17.5M'); //pass
        });

        it('Should take the number 99,949,999 and give back 99.9M', function(){  //write test
          expect(numberAbbreviate(99949999)).toBe('99.9M'); //pass
        });

        it('Should take the number 99,950,000 and give back 100M', function(){  //write test
          expect(numberAbbreviate(99950000)).toBe('100M'); //pass
        });
        
        it('Should take the number 10,000,0000 and give back 100M', function(){  //write test
          expect(numberAbbreviate(100000000)).toBe('100M'); //pass
        });

        it('Should take the number 125,000,000 and give back 125M', function(){  //write test
          expect(numberAbbreviate(125000000)).toBe('125M'); //pass
        });

        it('Should take the number 150,000,000 and give back 150M', function(){  //write test
          expect(numberAbbreviate(150000000)).toBe('150M'); //pass
        });

        it('Should take the number 175,000,000 and give back 175M', function(){  //write test
          expect(numberAbbreviate(175000000)).toBe('175M'); //pass
        });

        it('Should take the number 999,499,999 and give back 999M', function(){  //write test
          expect(numberAbbreviate(999499999)).toBe('999M'); //pass
        });

        it('Should take the number 999,500,000 and give back 1B', function(){  //write test
          expect(numberAbbreviate(999500000)).toBe('1B'); //pass
        });

        it('Should take the number 999,999,999 and give back 1B', function(){  //write test
          expect(numberAbbreviate(999999999)).toBe('1B'); //pass
        });

        //Billions
        it('Should take the number 1,000,000,000 and give back 1B', function(){  //write test
          expect(numberAbbreviate(1000000000)).toBe('1B'); //pass
        });

        it('Should take the number 1,000,000,001 and give back 1.00B', function(){  //write test
          expect(numberAbbreviate(1000000001)).toBe('1.00B'); //pass
        });

        it('Should take the number 1,250,000,000 and give back 1.25B', function(){  //write test
          expect(numberAbbreviate(1250000000)).toBe('1.25B'); //pass
        });

        it('Should take the number 1,500,000,000 and give back 1.50B', function(){  //write test
          expect(numberAbbreviate(1500000000)).toBe('1.50B'); //pass
        });

        it('Should take the number 4,295,928,000 and give back 4.30B', function(){  //write test
          expect(numberAbbreviate(4295928000)).toBe('4.30B'); //pass
        });

        it('Should take the number 5,000,000,000 and give back 5B', function(){  //write test
          expect(numberAbbreviate(5000000000)).toBe('5B'); //pass
        });

        it('Should take the number 5,000,000,001 and give back 5.00B', function(){  //write test
          expect(numberAbbreviate(5000000001)).toBe('5.00B'); //pass
        });

        it('Should take the number 7,500,000,000 and give back 7.50B', function(){  //write test
          expect(numberAbbreviate(7500000000)).toBe('7.50B'); //pass
        });

        it('Should take the number 9,994,999,999 and give back 9.99B', function(){  //write test
          expect(numberAbbreviate(9994999999)).toBe('9.99B'); //pass
        });

        it('Should take the number 9,995,000,000 and give back 10B', function(){  //write test
          expect(numberAbbreviate(9995000000)).toBe('10B'); //pass
        });

        it('Should take the number 9,999,999,999 and give back 10B', function(){  //write test
          expect(numberAbbreviate(9999999999)).toBe('10B'); //pass
        });

        it('Should take the number 10,000,000,000 and give back 10B', function(){  //write test
          expect(numberAbbreviate(10000000000)).toBe('10B'); //pass
        });

        it('Should take the number 12,500,000,000 and give back 12.5B', function(){  //write test
          expect(numberAbbreviate(12500000000)).toBe('12.5B'); //pass
        });

        it('Should take the number 12,500,000,001 and give back 12.5B', function(){  //write test
          expect(numberAbbreviate(12500000001)).toBe('12.5B'); //pass
        });

        it('Should take the number 17,500,000,000 and give back 17.5B', function(){  //write test
          expect(numberAbbreviate(17500000000)).toBe('17.5B'); //pass
        });

        it('Should take the number 50,000,000,000 and give back 50B', function(){  //write test
          expect(numberAbbreviate(50000000000)).toBe('50B'); //pass
        });

        it('Should take the number 75,000,000,000 and give back 75B', function(){  //write test
          expect(numberAbbreviate(75000000000)).toBe('75B'); //pass
        });  

        it('Should take the number 99,949,999,999 and give back 99.9B', function(){  //write test
          expect(numberAbbreviate(99949999999)).toBe('99.9B'); //pass
        });

        it('Should take the number 99,950,000,000 and give back 100B', function(){  //write test
          expect(numberAbbreviate(99950000000)).toBe('100B'); //pass
        });
        
        it('Should take the number 100,000,000,000 and give back 100B', function(){  //write test
          expect(numberAbbreviate(100000000000)).toBe('100B'); //pass
        });

        it('Should take the number 125,000,000,000 and give back 125B', function(){  //write test
          expect(numberAbbreviate(125000000000)).toBe('125B'); //pass
        });

        it('Should take the number 150,000,000,000 and give back 150B', function(){  //write test
          expect(numberAbbreviate(150000000000)).toBe('150B'); //pass
        });

        it('Should take the number 175,000,000,000 and give back 175B', function(){  //write test
          expect(numberAbbreviate(175000000000)).toBe('175B'); //pass
        });

        it('Should take the number 999,499,999,999 and give back 999B', function(){  //write test
          expect(numberAbbreviate(999499999999)).toBe('999B'); //pass
        });

        it('Should take the number 999,500,000,000 and give back 1T', function(){  //write test
          expect(numberAbbreviate(999500000000)).toBe('1T'); //pass
        });

        it('Should take the number 999,999,999,999 and give back 1T', function(){  //write test
          expect(numberAbbreviate(999999999999)).toBe('1T'); //pass
        });

        //Trillions

        it('Should take the number 1,000,000,000,000 and give back 1T', function(){  //write test
          expect(numberAbbreviate(1000000000000)).toBe('1T'); //pass
        });

        it('Should take the number 1,000,000,000,001 and give back 1.00T', function(){  //write test
          expect(numberAbbreviate(1000000000001)).toBe('1.00T'); //pass
        });

        it('Should take the number 1,250,000,000,000 and give back 1.25T', function(){  //write test
          expect(numberAbbreviate(1250000000000)).toBe('1.25T'); //pass
        });

        it('Should take the number 1,500,000,000,000 and give back 1.50T', function(){  //write test
          expect(numberAbbreviate(1500000000000)).toBe('1.50T'); //pass
        });

        it('Should take the number 4,295,928,000,000 and give back 4.30T', function(){  //write test
          expect(numberAbbreviate(4295928000000)).toBe('4.30T'); //pass
        });

        it('Should take the number 5,000,000,000,000 and give back 5T', function(){  //write test
          expect(numberAbbreviate(5000000000000)).toBe('5T'); //pass
        });

        it('Should take the number 5,000,000,000,001 and give back 5.00T', function(){  //write test
          expect(numberAbbreviate(5000000000001)).toBe('5.00T'); //pass
        });

        it('Should take the number 7,500,000,000,000 and give back 7.50T', function(){  //write test
          expect(numberAbbreviate(7500000000000)).toBe('7.50T'); //pass
        });

        it('Should take the number 9,994,999,999,999 and give back 9.99T', function(){  //write test
          expect(numberAbbreviate(9994999999999)).toBe('9.99T'); //pass
        });

        it('Should take the number 9,995,000,000,000 and give back 10T', function(){  //write test
          expect(numberAbbreviate(9995000000000)).toBe('10T'); //pass
        });

        it('Should take the number 9,999,999,999,999 and give back 10T', function(){  //write test
          expect(numberAbbreviate(9999999999999)).toBe('10T'); //pass
        });

        it('Should take the number 10,000,000,000,000 and give back 10T', function(){  //write test
          expect(numberAbbreviate(10000000000000)).toBe('10T'); //pass
        });

        it('Should take the number 12,500,000,000,000 and give back 12.5T', function(){  //write test
          expect(numberAbbreviate(12500000000000)).toBe('12.5T'); //pass
        });

        it('Should take the number 12,500,000,000,001 and give back 12.5T', function(){  //write test
          expect(numberAbbreviate(12500000000001)).toBe('12.5T'); //pass
        });

        it('Should take the number 17,500,000,000,000 and give back 17.5T', function(){  //write test
          expect(numberAbbreviate(17500000000000)).toBe('17.5T'); //pass
        });

        it('Should take the number 50,000,000,000 and give back 50B', function(){  //write test
          expect(numberAbbreviate(50000000000)).toBe('50B'); //pass
        });

        it('Should take the number 75,000,000,000 and give back 75B', function(){  //write test
          expect(numberAbbreviate(75000000000)).toBe('75B'); //pass
        });  

        it('Should take the number 99,949,999,999,999 and give back 99.9T', function(){  //write test
          expect(numberAbbreviate(99949999999999)).toBe('99.9T'); //pass
        });

        it('Should take the number 99,950,000,000,000 and give back 100T', function(){  //write test
          expect(numberAbbreviate(99950000000000)).toBe('100T'); //pass
        });
        
        it('Should take the number 100,000,000,000,000 and give back 100T', function(){  //write test
          expect(numberAbbreviate(100000000000000)).toBe('100T'); //pass
        });

        it('Should take the number 125,000,000,000,000 and give back 125T', function(){  //write test
          expect(numberAbbreviate(125000000000000)).toBe('125T'); //pass
        });

        it('Should take the number 150,000,000,000,000 and give back 150T', function(){  //write test
          expect(numberAbbreviate(150000000000000)).toBe('150T'); //pass
        });

        it('Should take the number 175,000,000,000,000 and give back 175T', function(){  //write test
          expect(numberAbbreviate(175000000000000)).toBe('175T'); //pass
        });

        it('Should take the number 999,499,999,999,999 and give back 999T', function(){  //write test
          expect(numberAbbreviate(999499999999999)).toBe('999T'); //pass
        });

        it('Should take the number 999,500,000,000,000 and give back 1Q', function(){  //write test
          expect(numberAbbreviate(999500000000000)).toBe('1Q'); //pass
        });

        it('Should take the number 999,999,999,999,999 and give back 1Q', function(){  //write test
          expect(numberAbbreviate(999999999999999)).toBe('1Q'); //pass
        });

    });
    
});