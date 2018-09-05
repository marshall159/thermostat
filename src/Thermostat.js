function Thermostat(temp = 20) {
  this.temperature = temp;
  this.minimumTemperature = 10;
}

Thermostat.prototype.increase = function() {
  this.temperature += 1;
};

Thermostat.prototype.decrease = function() {
  if (this.temperature > this.minimumTemperature) {
    this.temperature -= 1;
  }

};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};