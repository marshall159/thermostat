describe('Thermostat', function() {
    let thermostat = new Thermostat();
    
    describe('#temperature', function() {
      
        it('returns the start temperature', function() {
          expect(thermostat.temperature).toEqual(20)
        });
    });

   describe('#increase', function() {
       it('increases the temperature', function() {
           thermostat.increase();
           expect(thermostat.temperature).toEqual(21)
       });
   });

});