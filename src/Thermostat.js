function Thermostat(temp = 20) {
  this.temperature = temp;
  this.minimumTemperature = 10;
  this.powerSaving = true;
}

Thermostat.prototype.increase = function() {
  if(this.powerSaving && this.temperature < 25) {
    this.temperature += 1; 
  }
};

Thermostat.prototype.decrease = function() {
  if (this.temperature > this.minimumTemperature) {
    this.temperature -= 1;
  }
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.powerSavingSwitch = function() {
  this.powerSaving ? this.powerSaving = false : this.powerSaving = true;
};

