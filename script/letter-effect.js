//1) print dom object to text - done
//2) alphabetically rearrange content in the array index 1
//a) first get the first letter of the alphabet
//*need to place into jquery elements inorder to style*

$.fn.letter_effect = function(){
    
    var contexts = [],
        text,
        textUpperCase,
        textSplit,
        textSort,
        letters = [];
        
    //*whenever I use any function with the text variable/textSort then it creates an issue *
    texxt = this;
    texxt.css({
            opacity:'0',
            marginTop:'0px',
            color:'#84aae6',
            fontFamily:'Slabo, serif',
            textTransform:'uppercase',
            wordSpacing:'6px',
            letterSpacing:'11px',
            fontWeight:'200',
            lineHeight:'315%',
            fontSize:'30px',
            visibility:'hidden'
        });
    
    text = this.text();
    
    this.empty();
    
    
//    console.log(Object.keys(spaces).length);
  
    
    //can do it without toUppercase but issues rise if user does place upperCase letter into the word. Hence, indexOf will search 
    //uppercase letters to match and upon that it will function properly.
    textUpperCase = text.toUpperCase();//this and using in index needs to be the same.. why?
    textSplit = textUpperCase.split('');//turns it into an array
    textSort = textSplit.sort();
    
    //loop through textSort
    for(var i=0;i<text.length;i++){
       
        var char = text.split('')[i];
//        console.log(char);
        
        var charDiv = $('<span>').append(char);
        
        charDiv.css({
            opacity:'0'
        });
        
      //  console.log(textSort.indexOf(char_i.toUpperCase()));why only char_i gives -1 and toUppercase more accurate?
        
        charDiv.delay(textSort.indexOf(char.toUpperCase()) * 300).animate({
            opacity:'1'
        },100);
        
        charDiv.appendTo(texxt.css({
            opacity:'1',
            visibility:'visible'
        }));
     
    };
    
     
    
};

//var contextSplit = text.toUpperCase().split('').sort();
//    contexts.push(contextSplit);

