

$(document).ready(function(){

    $.getScript("main.js", function(){
        console.log('Loaded main.js');
    });


    name = '';
    $('.hidden').hide();

    $('#intro button').click(function(){
        $('#intro p, #intro button').fadeOut(1000);
        $('#playerName').fadeIn(3000);
    });
    $('#playerName form').submit(function(){
        var nameObject = $(this).serializeArray();
        
        for ( i in nameObject ){
            name += nameObject[i].value.toString();
        }
        console.log(name);

        event.preventDefault();
    });

    var Player = new Player(name);

});