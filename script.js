let disply = document.getElementById('screen');

const wipe = () => {
    disply.value = '';
}

const show = (n) => {
    disply.value += n;
}
const calc = () => {
    if(disply.value != 0){
        disply.value = eval(disply.value); 
        if(disply.value === "Infinity"){
            disply.value == "Cannot divide by 0";
        }
        
    }
    else{
        disply.value = 0
    }
}
