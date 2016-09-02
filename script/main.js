$(document).ready(function(){

    $('#caption1').css({
       opacity:'.3' 
    });
    
    $('#caption1').letter_effect();
    $('#caption2').letter_effect();
    $('#caption3').letter_effect();
    $('#caption4').letter_effect();
    $('#caption5').letter_effect();
//    $('h1').letter_effect();
    
     var spaces = {
        '#caption1':'62px',
        '#caption2':'168px',
        '#caption3':'25px',
        '#caption5':'8px',
    };
    
    apply_wordSpacing(spaces);
    
});

function apply_wordSpacing(spaces){
        
        for(var i=0;i<Object.keys(spaces).length;i++){
            var key = Object.keys(spaces)[i];
            var val = spaces[key];

           $(key).css({
               wordSpacing:val
           });

        }
};