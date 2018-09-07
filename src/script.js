

$(document).ready(function() {
    const t = new Thermostat()
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
        $(this).toggleClass('off');
    });
    
    $()
    
    $('button').click(function() {
        $('#display').text(t.getTemperature());
        $('#energySaving').attr('class', t.energyUsage());
        
        
    });
    
    
    
    
    
});