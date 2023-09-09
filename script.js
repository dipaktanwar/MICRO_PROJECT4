let string='';
let buttons=document.querySelectorAll(".btn");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
         if(e.target.innerHTML == '=' ){
            string=eval(string);
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML == 'X'){
            string +='*';
            document.querySelector('input').value=string
        }
        else if (e.target.innerHTML === 'DEL') {
            
              if (string.length > 0) {
                string = string.slice(0, -1); 
                document.querySelector('input').value = string;
            }
        }
        else if( e.target.innerHTML == "RESET"){
            string='';
            document.querySelector('input').value=string
           
        }
        else{
           string=string+e.target.innerHTML;
            document.querySelector('input').value=string
            }
})
})