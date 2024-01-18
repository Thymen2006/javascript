/*
opdracht1
*/
var number = 0;
function addElement(){

    const knop = document.createElement('div');
    knop.classList.add('container__item');
    console.log(knop.className);

    number++;
    knop.innerText = number;
    document.querySelector(".container").appendChild(knop);

    console.log(number);
    if(number === 49){
        document.getElementById("myBtn").disabled = true;
    }
}




/*
opdracht2

function addElement(){
for(let i = 1;i < 50; i++){
        const knop = document.createElement('div');
    knop.classList.add('container__item');
    console.log(knop.className);

    knop.innerText = i;
    document.querySelector(".container").appendChild(knop);

    console.log(i);
    if(i === 49){
        document.getElementById("myBtn").disabled = true;
    }
    }
}
*/
