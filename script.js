let string="";
// saare button ko access kar liye
let buttons=document.querySelectorAll('.button');

//Array mai convert kiye buttons ko fir forEach loop lagaye

Array.from(buttons).forEach((button)=>{
button.addEventListener('click', (e)=>{

if(e.target.innerHTML== '='){
    string = eval(string);
    document.querySelector('input').value=string;
}
else if(e.target.innerHTML=='C'){
    string="";
    document.querySelector('input').value=string;  
}

else if(e.target.innerHTML=='M-'){
    string=-string;
    document.querySelector('input').value=string;  
}
else if(e.target.innerHTML=='M+'){
    string=+string;
    document.querySelector('input').value=string;  
}
else{
    // console.log(e.target);
    string=string+e.target.innerHTML;

document.querySelector('input').value=string;
}


})
})