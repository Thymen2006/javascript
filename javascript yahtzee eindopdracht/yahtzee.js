const canThrow = [true,true,true,true,true];
const vast1 = [true,true,true,true,true,true];
const vast2 = [true,true,true,true,true,true];

let keer = 0;

let ogen = 1;
let ogen1 = 1;
let ogen2 = 1;
let ogen3 = 1;
let ogen4 = 1;

const dice = [0,0,0,0,0,0];

const dices = [0,0,0,0,0,0];
// let dice1;
// let dice2;
// let dice3;
// let dice4;
// let dice5;
// let dice6;
// let subtotaal = dice1 + dice2 + dice3 + dice4 + dice5 + dice6;
// let bonus = 0;
// if(subtotaal >= 60){bonus = 35;}
// let totaal = subtotaal + bonus;

function dobel(){
    const gerolt = [];
    
    if(canThrow[0]){
    ogen =  Math.floor(Math.random() * 6) + 1;
    }if(canThrow[1]){
    ogen1 =  Math.floor(Math.random() * 6) + 1;
    }if(canThrow[2]){
    ogen2 =  Math.floor(Math.random() * 6) + 1;
    }if(canThrow[3]){
    ogen3 =  Math.floor(Math.random() * 6) + 1;
    }if(canThrow[4]){
    ogen4 =  Math.floor(Math.random() * 6) + 1;
    }
    console.log(ogen, ogen1, ogen2, ogen3, ogen4);

    gerolt.push(ogen, ogen1, ogen2, ogen3, ogen4);
    console.log(gerolt);

    // function countNumber(gerolt, value) {
    //     var count = 0;
    //     gerolt.forEach((v) => (v === value && count++));
    //     return count;
    // }
    // console.log("1 = " + countNumber(gerolt, 1));
    // console.log("2 = " + countNumber(gerolt, 2));
    // console.log("3 = " + countNumber(gerolt, 3));
    // console.log("4 = " + countNumber(gerolt, 4));
    // console.log("5 = " + countNumber(gerolt, 5));
    // console.log("6 = " + countNumber(gerolt, 6));

    if(gerolt[0] === 1){document.getElementById("img1").src = "foto/1ogen.png";}
    if(gerolt[1] === 1){document.getElementById("img2").src = "foto/1ogen.png";}
    if(gerolt[2] === 1){document.getElementById("img3").src = "foto/1ogen.png";}
    if(gerolt[3] === 1){document.getElementById("img4").src = "foto/1ogen.png";}
    if(gerolt[4] === 1){document.getElementById("img5").src = "foto/1ogen.png";}

    if(gerolt[0] === 2){document.getElementById("img1").src = "foto/2ogen.png";}
    if(gerolt[1] === 2){document.getElementById("img2").src = "foto/2ogen.png";}
    if(gerolt[2] === 2){document.getElementById("img3").src = "foto/2ogen.png";}
    if(gerolt[3] === 2){document.getElementById("img4").src = "foto/2ogen.png";}
    if(gerolt[4] === 2){document.getElementById("img5").src = "foto/2ogen.png";}

    if(gerolt[0] === 3){document.getElementById("img1").src = "foto/3ogen.png";}
    if(gerolt[1] === 3){document.getElementById("img2").src = "foto/3ogen.png";}
    if(gerolt[2] === 3){document.getElementById("img3").src = "foto/3ogen.png";}
    if(gerolt[3] === 3){document.getElementById("img4").src = "foto/3ogen.png";}
    if(gerolt[4] === 3){document.getElementById("img5").src = "foto/3ogen.png";}

    if(gerolt[0] === 4){document.getElementById("img1").src = "foto/4ogen.png";}
    if(gerolt[1] === 4){document.getElementById("img2").src = "foto/4ogen.png";}
    if(gerolt[2] === 4){document.getElementById("img3").src = "foto/4ogen.png";}
    if(gerolt[3] === 4){document.getElementById("img4").src = "foto/4ogen.png";}
    if(gerolt[4] === 4){document.getElementById("img5").src = "foto/4ogen.png";}

    if(gerolt[0] === 5){document.getElementById("img1").src = "foto/5ogen.png";}
    if(gerolt[1] === 5){document.getElementById("img2").src = "foto/5ogen.png";}
    if(gerolt[2] === 5){document.getElementById("img3").src = "foto/5ogen.png";}
    if(gerolt[3] === 5){document.getElementById("img4").src = "foto/5ogen.png";}
    if(gerolt[4] === 5){document.getElementById("img5").src = "foto/5ogen.png";}

    if(gerolt[0] === 6){document.getElementById("img1").src = "foto/6ogen.png";}
    if(gerolt[1] === 6){document.getElementById("img2").src = "foto/6ogen.png";}
    if(gerolt[2] === 6){document.getElementById("img3").src = "foto/6ogen.png";}
    if(gerolt[3] === 6){document.getElementById("img4").src = "foto/6ogen.png";}
    if(gerolt[4] === 6){document.getElementById("img5").src = "foto/6ogen.png";}

        keer += 1;
    if(keer === 3){
        document.getElementById("gooien").disabled = true;
        keer = 0;
    }
    console.log(keer);
    
    function countdice(){
        for(i = 0; i < 6; i++){
            dice[i] = gerolt.filter(num => num == i + 1).length;
        }
    } 
    console.log(countdice());
    console.log(dice);

    dices[0] = dice[0] * 1;
    dices[1] = dice[1] * 2;
    dices[2] = dice[2] * 3;
    dices[3] = dice[3] * 4;
    dices[4] = dice[4] * 5;
    dices[5] = dice[5] * 6;

    // const dice1 = dice[0] * 1;
    // const dice2 = dice[1] * 2;
    // const dice3 = dice[2] * 3;
    // const dice4 = dice[3] * 4;
    // const dice5 = dice[4] * 5;
    // const dice6 = dice[5] * 6;
    const subtotaal1 = subcount1[0] + subcount1[1] + subcount1[2] + subcount1[3] + subcount1[4] + subcount1[5];
    const subtotaal2 = subcount2[0] + subcount2[1] + subcount2[2] + subcount2[3] + subcount2[4] + subcount2[5];
    let bonus1 = 0;
    let bonus2 = 0;
    if(subtotaal1 >= 60){bonus1 = 35;}
    if(subtotaal2 >= 60){bonus2 = 35;}
    const totaal1 = subtotaal1 + bonus1;
    const totaal2 = subtotaal2 + bonus2;
    
    if(vast1[0] === true){document.getElementById("een").innerHTML = "een = " + dices[0];
    }else{document.getElementById("eenb").disabled = true;}
    if(vast1[1] === true){document.getElementById("twee").innerHTML = "twee = " + dices[1];
    }else{document.getElementById("tweeb").disabled = true;}
    if(vast1[2] === true){document.getElementById("drie").innerHTML = "drie = " + dices[2];
    }else{document.getElementById("drieb").disabled = true;}
    if(vast1[3] === true){document.getElementById("vier").innerHTML = "vier = " + dices[3];
    }else{document.getElementById("vierb").disabled = true;}
    if(vast1[4] === true){document.getElementById("vijf").innerHTML = "vijf = " + dices[4];
    }else{document.getElementById("vijfb").disabled = true;}
    if(vast1[5] === true){document.getElementById("zes").innerHTML = "zes = " + dices[5];
    }else{document.getElementById("zesb").disabled = true;}

    document.getElementById("subtotaal1").innerHTML = "subtotaal = " + subtotaal1;
    document.getElementById("bonus1").innerHTML = "bonus = " + bonus1;
    document.getElementById("totaal1").innerHTML = "totaal = " + totaal1;



    if(vast1[0] === true){document.getElementById("een2").innerHTML = "een = " + dices[0];
    }else{document.getElementById("eenb2").disabled = true;}
    if(vast1[1] === true){document.getElementById("twee2").innerHTML = "twee = " + dices[1];
    }else{document.getElementById("tweeb2").disabled = true;}
    if(vast1[2] === true){document.getElementById("drie2").innerHTML = "drie = " + dices[2];
    }else{document.getElementById("drieb2").disabled = true;}
    if(vast1[3] === true){document.getElementById("vier2").innerHTML = "vier = " + dices[3];
    }else{document.getElementById("vierb2").disabled = true;}
    if(vast1[4] === true){document.getElementById("vijf2").innerHTML = "vijf = " + dices[4];
    }else{document.getElementById("vijfb2").disabled = true;}
    if(vast1[5] === true){document.getElementById("zes2").innerHTML = "zes = " + dices[5];
    }else{document.getElementById("zesb2").disabled = true;}

    document.getElementById("subtotaal2").innerHTML = "subtotaal = " + subtotaal2;
    document.getElementById("bonus2").innerHTML = "bonus = " + bonus2;
    document.getElementById("totaal2").innerHTML = "totaal = " + totaal2;
}

const subcount1 = [];

function vasta(welke){
    vast1[welke - 1] = false;
    subcount1.push(dices[welke - 1])
}

const subcount2 = [];

function vastb(welke){
    vast2[welke - 1] = false;
    subcount2.push(dices[welke - 1])
}

function onthoud(welke){
    if(canThrow[welke - 1] == false){
        canThrow[welke - 1] = true;
    }else{canThrow[welke - 1] = false;}
    document.getElementById("onthoud" + welke).classList.toggle("is-active"); 
}
function volgende(){
    document.getElementById("gooien").disabled = false;
    document.getElementById("onthoud1").classList.remove("is-active");
    document.getElementById("onthoud2").classList.remove("is-active");
    document.getElementById("onthoud3").classList.remove("is-active");
    document.getElementById("onthoud4").classList.remove("is-active");
    document.getElementById("onthoud5").classList.remove("is-active");
    canThrow[0] = true;
    canThrow[1] = true;
    canThrow[2] = true;
    canThrow[3] = true;
    canThrow[4] = true;
}

// function onthoud1(){
//     if(canThrow[0] == false){
//         canThrow[0] = true;
//     }else{canThrow[0] = false;}
//     document.getElementById("onthoud1").classList.toggle("is-active"); 
// }
// function onthoud2(){
//     if(canThrow[1] == false){
//         canThrow[1] = true;
//     }else{canThrow[1] = false;}
//     document.getElementById("onthoud2").classList.toggle("is-active"); 
// }
// function onthoud3(){
//     if(canThrow[2] == false){
//         canThrow[2] = true;
//     }else{canThrow[2] = false;}
//     document.getElementById("onthoud3").classList.toggle("is-active"); 
// }
// function onthoud4(){
//     if(canThrow[3] == false){
//         canThrow[3] = true;
//     }else{canThrow[3] = false;}
//     document.getElementById("onthoud4").classList.toggle("is-active"); 
// }
// function onthoud5(){
//     if(canThrow[4] == false){
//         canThrow[4] = true;
//     }else{canThrow[4] = false;}
//     document.getElementById("onthoud5").classList.toggle("is-active"); 
// }