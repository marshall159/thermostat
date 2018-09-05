describe('Thermostat', function() {

  describe('#temperature', function() {
    var thermostat = new Thermostat()
    it('returns the start temperature', function() {
      expect(thermostat.temperature).toEqual(20)
    });
  });

  // describe('#temperature', function() {

  // });

});