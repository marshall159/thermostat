'use strict';

function Thermostat(temp = 20) {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = temp;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSaving = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
}

Thermostat.prototype.increase = function() {
  if(this.powerSaving && this.getTemperature() < this.MAX_LIMIT_PSM_ON) {
    this.temperature += 1; 
  }
  if (!this.powerSaving && this.getTemperature() < this.MAX_LIMIT_PSM_OFF) {
      this.temperature += 1; 
  }
};


Thermostat.prototype.decrease = function() {
  if (this.isMinimumTemperature()) {
    return;
  };
    this.temperature -= 1;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.powerSavingSwitch = function() {
  this.powerSaving ? this.powerSaving = false : this.powerSaving = true;
};

Thermostat.prototype.energyUsage = function() {
    if (this.getTemperature() < this.MEDIUM_ENERGY_USAGE_LIMIT) {
        return 'low-usage'
        } else if (this.getTemperature() < this.MAX_LIMIT_PSM_ON) {
        return 'medium-usage'
        } else {
            return 'high-usage'
        }
};

Thermostat.prototype.getTemperature = function() {
    return this.temperature;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

