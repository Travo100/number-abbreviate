describe('Filters', function(){ //describe your object type
    beforeEach(module('app')); //load module
    
    describe('numberAbbreviate',function(){ //describe your app name
    
        var numberAbbreviate;    
        beforeEach(inject(function($filter){ //initialize your filter
            numberAbbreviate = $filter('numberAbbreviate',{});
        }));
        
        // for (var i = -1; i < 9999; i++) {
        //   it('Should take the number ' + i + ' and give back ' + i, function(){  //write test
        //     expect(numberAbbreviate(i)).toBe(i.toString()); //pass
        //   }); 
        // }
        it('Should take the number 10000.9999 and give back 10K', function(){  //write test
          expect(numberAbbreviate(10000.9999)).toBe('10.0K'); //pass
        });

        it('Should take the number 10000 and give back 10K', function(){  //write test
          expect(numberAbbreviate(10000)).toBe('10K'); //pass
        });

        it('Should take the number 10001 and give back 10.0K', function(){  //write test
          expect(numberAbbreviate(10001)).toBe('10.0K'); //pass
        });

        it('Should take the number 12500 and give back 12.5K', function(){  //write test
          expect(numberAbbreviate(12500)).toBe('12.5K'); //pass
        });

        it('Should take the number 15000 and give back 15K', function(){  //write test
          expect(numberAbbreviate(15000)).toBe('15K'); //pass
        });

        it('Should take the number 15001 and give back 15.0K', function(){  //write test
          expect(numberAbbreviate(15001)).toBe('15.0K'); //pass
        });

        it('Should take the number 17500 and give back 17.5K', function(){  //write test
          expect(numberAbbreviate(17500)).toBe('17.5K'); //pass
        });

        it('Should take the number 19999 and give back 20.0K', function(){  //write test
          expect(numberAbbreviate(19999)).toBe('20.0K'); //pass
        });

        it('Should take the number 99999 and give back 100K', function(){  //write test
          expect(numberAbbreviate(99999)).toBe('100K'); //pass
        });

        it('Should take the number 100000 and give back 100K', function(){  //write test
          expect(numberAbbreviate(100000)).toBe('100K'); //pass
        });

        it('Should take the number 150000 and give back 150K', function(){  //write test
          expect(numberAbbreviate(150000)).toBe('150K'); //pass
        });

        it('Should take the number 999500 and give back 1M', function(){  //write test
          expect(numberAbbreviate(999500)).toBe('1M'); //pass
        });

        it('Should take the number 999999 and give back 1M', function(){  //write test
          expect(numberAbbreviate(999999)).toBe('1M'); //pass
        });

        it('Should take the number 1000000 and give back 1M', function(){  //write test
          expect(numberAbbreviate(1000000)).toBe('1M'); //pass
        });

        it('Should take the number 1250000 and give back 1.25M', function(){  //write test
          expect(numberAbbreviate(1250000)).toBe('1.25M'); //pass
        });

        it('Should take the number 1500000 and give back 1.50M', function(){  //write test
          expect(numberAbbreviate(1500000)).toBe('1.50M'); //pass
        });

        it('Should take the number 4295928 and give back 4.30M', function(){  //write test
          expect(numberAbbreviate(4295928)).toBe('4.30M'); //pass
        });

        it('Should take the number 5000000 and give back 5.00M', function(){  //write test
          expect(numberAbbreviate(5000000)).toBe('5M'); //pass
        });

        it('Should take the number 5000001 and give back 5.00M', function(){  //write test
          expect(numberAbbreviate(5000001)).toBe('5.00M'); //pass
        });

        it('Should take the number 7500000 and give back 7.50M', function(){  //write test
          expect(numberAbbreviate(7500000)).toBe('7.50M'); //pass
        });

        it('Should take the number 9995000 and give back 10M', function(){  //write test
          expect(numberAbbreviate(9995000)).toBe('10M'); //pass
        });

        it('Should take the number 9999999 and give back 10M', function(){  //write test
          expect(numberAbbreviate(9999999)).toBe('10M'); //pass
        });

        it('Should take the number 10000000 and give back 10M', function(){  //write test
          expect(numberAbbreviate(10000000)).toBe('10M'); //pass
        });

        it('Should take the number 12500000 and give back 12.5M', function(){  //write test
          expect(numberAbbreviate(12500000)).toBe('12.5M'); //pass
        });

        it('Should take the number 12500001 and give back 12.5M', function(){  //write test
          expect(numberAbbreviate(12500001)).toBe('12.5M'); //pass
        });

        it('Should take the number 17500000 and give back 17.5M', function(){  //write test
          expect(numberAbbreviate(17500000)).toBe('17.5M'); //pass
        });

        it('Should take the number 99949999 and give back 99.9M', function(){  //write test
          expect(numberAbbreviate(99949999)).toBe('99.9M'); //pass
        });

        it('Should take the number 99950000 and give back 100M', function(){  //write test
          expect(numberAbbreviate(99950000)).toBe('100M'); //pass
        });
        
        it('Should take the number 100000000 and give back 100M', function(){  //write test
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

        it('Should take the number 999,500,000 and give back 1B', function(){  //write test
          expect(numberAbbreviate(999500000)).toBe('1B'); //pass
        });

    });
    
});