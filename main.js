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

function link(){

}

function pressed(){
    let age;
    age = Number(document.getElementById("age").value);
    if(age <= 17)
    {
        
       alert("You are not an adult");
    }
    else
    {
       window.location.href = "https://www.presidente.com.do/";
    }
}