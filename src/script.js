const t = new Thermostat()

$(document).ready(function() {
    $('#display').text(t.getTemperature());
    $('#increaseTemp').click(function() {
        t.increase();
    });
    $('#decreaseTemp').click(function() {
        t.decrease();
    });
    $('#reset').click(function() {
        t.reset();
    });
    $('#switchPower').click(function() {
        t.powerSavingSwitch();
    });
    $('button').click(function() {
        $('#display').text(t.getTemperature());
        $('#energySaving').attr('class', t.energyUsage());
        
        
    });
    
    
    
    
    
});