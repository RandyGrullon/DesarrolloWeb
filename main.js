let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerText === 'C'){
            display.innerText = '';
         }
         else if(e.target.innerText === '='){
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
        }else if(e.target.innerText === '←'){
            if (display.innerText){
                display.innerText = display.innerText.slice(0, -1);
             }
        }else{
            display.innerText += e.target.innerText;
        }
    });
});

function pressed(){
    var age=document.getElementById('btn').value;
//check if age is a number or less than or greater than 100
if (age <=17)
{ 
    alert("Sos menor Boludo");
  
}
    
}