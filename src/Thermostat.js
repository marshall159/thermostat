function Thermostat(temp = 20) {
  this.temperature = temp;
}

Thermostat.prototype.increase = function() {
    this.temperature += 1;
};

Thermostat.prototype.decrease = function() {
    this.temperature -= 1;
};