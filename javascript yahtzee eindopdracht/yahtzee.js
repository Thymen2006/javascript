const canThrow = [true,true,true,true,true];
const vast1 = [true,true,true,true,true,true,true,true,true,true,true,true,true];
const vast2 = [true,true,true,true,true,true,true,true,true,true,true,true,true];

let keer = 0;

let ogen = 1;
let ogen1 = 1;
let ogen2 = 1;
let ogen3 = 1;
let ogen4 = 1;

const dice = [0,0,0,0,0,0];

const dices = [0,0,0,0,0,0];
const dices1 = [0,0,0,0,0,0,0];
const dices2 = [0,0,0,0,0,0,0];

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

    const subtotaal1 = subcount1[0] + subcount1[1] + subcount1[2] + subcount1[3] + subcount1[4] + subcount1[5];
    const subtotaal2 = subcount2[0] + subcount2[1] + subcount2[2] + subcount2[3] + subcount2[4] + subcount2[5];
    let bonus1 = 0;
    let bonus2 = 0;
    if(subtotaal1 >= 60){bonus1 = 35;}
    if(subtotaal2 >= 60){bonus2 = 35;}
    const totaal1 = subtotaal1 + bonus1;
    const totaal2 = subtotaal2 + bonus2;

    let three1 = 0;
    let three2 = 0;
    if(dice[0] == 3||dice[0] == 4||dice[0] == 5){three1 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[0] == 3||dice[0] == 4||dice[0] == 5){three2 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[1] == 3||dice[1] == 4||dice[1] == 5){three1 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[1] == 3||dice[1] == 4||dice[1] == 5){three2 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[2] == 3||dice[2] == 4||dice[2] == 5){three1 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[2] == 3||dice[2] == 4||dice[2] == 5){three2 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[3] == 3||dice[3] == 4||dice[3] == 5){three1 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[3] == 3||dice[3] == 4||dice[3] == 5){three2 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[4] == 3||dice[4] == 4||dice[4] == 5){three1 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[4] == 3||dice[4] == 4||dice[4] == 5){three2 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[5] == 3||dice[5] == 4||dice[5] == 5){three1 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[5] == 3||dice[5] == 4||dice[5] == 5){three2 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}

    let four1 = 0;
    let four2 = 0;
    if(dice[0] == 4||dice[0] == 5){four1 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[0] == 4||dice[0] == 5){four2 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[1] == 4||dice[1] == 5){four1 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[1] == 4||dice[1] == 5){four2 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[2] == 4||dice[2] == 5){four1 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[2] == 4||dice[2] == 5){four2 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[3] == 4||dice[3] == 5){four1 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[3] == 4||dice[3] == 5){four2 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[4] == 4||dice[4] == 5){four1 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[4] == 4||dice[4] == 5){four2 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[5] == 4||dice[5] == 5){four1 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}
    if(dice[5] == 4||dice[5] == 5){four2 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5]}

    let full1 = 0;
    let full2 = 0;
    if(dice[0] == 3 && dice[1] == 2 ||dice[0] == 3 && dice[2] == 2||dice[0] == 3 && dice[3] == 2||dice[0] == 3 && dice[4] == 2||dice[0] == 3 && dice[5] == 2){full1 = 25}
    if(dice[0] == 3 && dice[1] == 2 ||dice[0] == 3 && dice[2] == 2||dice[0] == 3 && dice[3] == 2||dice[0] == 3 && dice[4] == 2||dice[0] == 3 && dice[5] == 2){full2 = 25}
    if(dice[1] == 3 && dice[0] == 2 ||dice[1] == 3 && dice[2] == 2||dice[1] == 3 && dice[3] == 2||dice[1] == 3 && dice[4] == 2||dice[1] == 3 && dice[5] == 2){full1 = 25}
    if(dice[1] == 3 && dice[0] == 2 ||dice[1] == 3 && dice[2] == 2||dice[1] == 3 && dice[3] == 2||dice[1] == 3 && dice[4] == 2||dice[1] == 3 && dice[5] == 2){full2 = 25}
    if(dice[2] == 3 && dice[1] == 2 ||dice[2] == 3 && dice[0] == 2||dice[2] == 3 && dice[3] == 2||dice[2] == 3 && dice[4] == 2||dice[2] == 3 && dice[5] == 2){full1 = 25}
    if(dice[2] == 3 && dice[1] == 2 ||dice[2] == 3 && dice[0] == 2||dice[2] == 3 && dice[3] == 2||dice[2] == 3 && dice[4] == 2||dice[2] == 3 && dice[5] == 2){full2 = 25}
    if(dice[3] == 3 && dice[1] == 2 ||dice[3] == 3 && dice[2] == 2||dice[3] == 3 && dice[0] == 2||dice[3] == 3 && dice[4] == 2||dice[3] == 3 && dice[5] == 2){full1 = 25}
    if(dice[3] == 3 && dice[1] == 2 ||dice[3] == 3 && dice[2] == 2||dice[3] == 3 && dice[0] == 2||dice[3] == 3 && dice[4] == 2||dice[3] == 3 && dice[5] == 2){full2 = 25}
    if(dice[4] == 3 && dice[1] == 2 ||dice[4] == 3 && dice[2] == 2||dice[4] == 3 && dice[3] == 2||dice[4] == 3 && dice[0] == 2||dice[4] == 3 && dice[5] == 2){full1 = 25}
    if(dice[4] == 3 && dice[1] == 2 ||dice[4] == 3 && dice[2] == 2||dice[4] == 3 && dice[3] == 2||dice[4] == 3 && dice[0] == 2||dice[4] == 3 && dice[5] == 2){full2 = 25}
    if(dice[5] == 3 && dice[1] == 2 ||dice[5] == 3 && dice[2] == 2||dice[5] == 3 && dice[3] == 2||dice[5] == 3 && dice[4] == 2||dice[5] == 3 && dice[1] == 2){full1 = 25}
    if(dice[5] == 3 && dice[1] == 2 ||dice[5] == 3 && dice[2] == 2||dice[5] == 3 && dice[3] == 2||dice[5] == 3 && dice[4] == 2||dice[5] == 3 && dice[1] == 2){full2 = 25}

    let klein1 = 0;
    let klein2 = 0;
    if(dice[0] && dice[1] && dice[2] && dice[3] || dice[2] && dice[3] && dice[4] && dice[5] || dice[1] && dice[2] && dice[3] && dice[4]){klein1 = 30}
    if(dice[0] && dice[1] && dice[2] && dice[3] || dice[2] && dice[3] && dice[4] && dice[5] || dice[1] && dice[2] && dice[3] && dice[4]){klein2 = 30}

    let groot1 = 0;
    let groot2 = 0;
    if(dice[0] && dice[1] && dice[2] && dice[3] && dice[4] || dice[1] && dice[2] && dice[3] && dice[4] && dice[5]){groot1 = 40}
    if(dice[0] && dice[1] && dice[2] && dice[3] && dice[4] || dice[1] && dice[2] && dice[3] && dice[4] && dice[5]){groot2 = 40}

    let yathz1 = 0;
    let yathz2 = 0;
    if(dice[0] == 5){yathz1 = 50}if(dice[1] == 5){yathz1 = 50}if(dice[2] == 5){yathz1 = 50}if(dice[3] == 5){yathz1 = 50}if(dice[4] == 5){yathz1 = 50}if(dice[5] == 5){yathz1 = 50}
    if(dice[0] == 5){yathz2 = 50}if(dice[1] == 5){yathz2 = 50}if(dice[2] == 5){yathz2 = 50}if(dice[3] == 5){yathz2 = 50}if(dice[4] == 5){yathz2 = 50}if(dice[5] == 5){yathz2 = 50}

    let chance1 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5];
    let chance2 = dices[0] + dices[1] + dices[2] + dices[3] + dices[4] + dices[5];

    let bereken1 = count1[0] + count1[1] + count1[2] + count1[3] + count1[4] + count1[5] + count1[6];
    let bereken2 = count2[0] + count2[1] + count2[2] + count2[3] + count2[4] + count2[5] + count2[6];
    let totaalal1 = bereken1 + totaal1;
    let totaalal2 = bereken2 + totaal2;

    dices1[0] = three1;
    dices1[1] = four1;
    dices1[2] = full1;
    dices1[3] = klein1;
    dices1[4] = groot1;
    dices1[5] = yathz1;
    dices1[6] = chance1;

    dices2[0] = three2;
    dices2[1] = four2;
    dices2[2] = full2;
    dices2[3] = klein2;
    dices2[4] = groot2;
    dices2[5] = yathz2;
    dices2[6] = chance2;
    
    if(vast1[0] === true){document.getElementById("een").innerHTML = "een = " + dices[0];
    }else{document.getElementById("eena").disabled = true;}
    if(vast1[1] === true){document.getElementById("twee").innerHTML = "twee = " + dices[1];
    }else{document.getElementById("tweea").disabled = true;}
    if(vast1[2] === true){document.getElementById("drie").innerHTML = "drie = " + dices[2];
    }else{document.getElementById("driea").disabled = true;}
    if(vast1[3] === true){document.getElementById("vier").innerHTML = "vier = " + dices[3];
    }else{document.getElementById("viera").disabled = true;}
    if(vast1[4] === true){document.getElementById("vijf").innerHTML = "vijf = " + dices[4];
    }else{document.getElementById("vijfa").disabled = true;}
    if(vast1[5] === true){document.getElementById("zes").innerHTML = "zes = " + dices[5];
    }else{document.getElementById("zesa").disabled = true;}
    document.getElementById("subtotaal1").innerHTML = "subtotaal = " + subtotaal1;
    document.getElementById("bonus1").innerHTML = "bonus = " + bonus1;
    document.getElementById("totaal1").innerHTML = "totaal = " + totaal1;
    if(vast1[6] === true){document.getElementById("three1").innerHTML = "three of a kind = " + dices1[0];
    }else{document.getElementById("threea").disabled = true;}
    if(vast1[7] === true){document.getElementById("four1").innerHTML = "four of a kind = " + dices1[1];
    }else{document.getElementById("foura").disabled = true;}
    if(vast1[8] === true){document.getElementById("full1").innerHTML = "(25)full house = " + dices1[2];
    }else{document.getElementById("fulla").disabled = true;}
    if(vast1[9] === true){document.getElementById("klein1").innerHTML = "(30)kleine straat = " + dices1[3];
    }else{document.getElementById("kleina").disabled = true;}
    if(vast1[10] === true){document.getElementById("groot1").innerHTML = "(40)groote straat = " + dices1[4];
    }else{document.getElementById("groota").disabled = true;}
    if(vast1[11] === true){document.getElementById("yahtzee1").innerHTML = "(50)yahtzee = " + dices1[5];
    }else{document.getElementById("yathzeea").disabled = true;}
    if(vast1[12] === true){document.getElementById("chance1").innerHTML = "chance = " + dices1[6];
    }else{document.getElementById("chancea").disabled = true;}
    document.getElementById("totaalall1").innerHTML = "totaal alles = " + totaalal1;



    if(vast2[0] === true){document.getElementById("een2").innerHTML = "een = " + dices[0];
    }else{document.getElementById("eenb").disabled = true;}
    if(vast2[1] === true){document.getElementById("twee2").innerHTML = "twee = " + dices[1];
    }else{document.getElementById("tweeb").disabled = true;}
    if(vast2[2] === true){document.getElementById("drie2").innerHTML = "drie = " + dices[2];
    }else{document.getElementById("drieb").disabled = true;}
    if(vast2[3] === true){document.getElementById("vier2").innerHTML = "vier = " + dices[3];
    }else{document.getElementById("vierb").disabled = true;}
    if(vast2[4] === true){document.getElementById("vijf2").innerHTML = "vijf = " + dices[4];
    }else{document.getElementById("vijfb").disabled = true;}
    if(vast2[5] === true){document.getElementById("zes2").innerHTML = "zes = " + dices[5];
    }else{document.getElementById("zesb").disabled = true;}
    document.getElementById("subtotaal2").innerHTML = "subtotaal = " + subtotaal2;
    document.getElementById("bonus2").innerHTML = "bonus = " + bonus2;
    document.getElementById("totaal2").innerHTML = "totaal = " + totaal2;
    if(vast2[6] === true){document.getElementById("three2").innerHTML = "three of a kind = " + dices2[0];
    }else{document.getElementById("threeb").disabled = true;}
    if(vast2[7] === true){document.getElementById("four2").innerHTML = "four of a kind = " + dices2[1];
    }else{document.getElementById("fourb").disabled = true;}
    if(vast2[8] === true){document.getElementById("full2").innerHTML = "(25)full house = " + dices2[2];
    }else{document.getElementById("fullb").disabled = true;}
    if(vast2[9] === true){document.getElementById("klein2").innerHTML = "(30)kleine straat = " + dices2[3];
    }else{document.getElementById("kleinb").disabled = true;}
    if(vast2[10] === true){document.getElementById("groot2").innerHTML = "(40)groote straat = " + dices2[4];
    }else{document.getElementById("grootb").disabled = true;}
    if(vast2[11] === true){document.getElementById("yahtzee2").innerHTML = "(50)yahtzee = " + dices2[5];
    }else{document.getElementById("yathzeeb").disabled = true;}
    if(vast2[12] === true){document.getElementById("chance2").innerHTML = "chance = " + dices2[6];
    }else{document.getElementById("chanceb").disabled = true;}
    document.getElementById("totaalall2").innerHTML = "totaal alles = " + totaalal2;
}

const subcount1 = [];
const count1 = [];
console.log(count1);

function vasta(welke){
    vast1[welke - 1] = false;
    subcount1.push(dices[welke - 1]);
}
function vasta1(){
    vast1[6] = false;
    count1.push(dices1[0]);
}
function vasta2(){
    vast1[7] = false;
    count1.push(dices1[1]);
}
function vasta3(){
    vast1[8] = false;
    count1.push(dices1[2]);
}
function vasta4(){
    vast1[9] = false;
    count1.push(dices1[3]);
}
function vasta5(){
    vast1[10] = false;
    count1.push(dices1[4]);
}
function vasta6(){
    vast1[11] = false;
    count1.push(dices1[5]);
}
function vasta7(){
    vast1[12] = false;
    count1.push(dices1[6]);
}



const subcount2 = [];
const count2 = [];
console.log(count2);

function vastb(welke){
    vast2[welke - 1] = false;
    subcount2.push(dices[welke - 1])
}
function vastb1(){
    vast2[6] = false;
    count2.push(dices2[0]);
}
function vastb2(){
    vast2[7] = false;
    count2.push(dices2[1]);
}
function vastb3(){
    vast2[8] = false;
    count2.push(dices2[2]);
}
function vastb4(){
    vast2[9] = false;
    count2.push(dices2[3]);
}
function vastb5(){
    vast2[10] = false;
    count2.push(dices2[4]);
}
function vastb6(){
    vast2[11] = false;
    count2.push(dices2[5]);
}
function vastb7(){
    vast2[12] = false;
    count2.push(dices2[6]);
}

function onthoud(welke){
    if(canThrow[welke - 1] == false){
        canThrow[welke - 1] = true;
    }else{canThrow[welke - 1] = false;}
    document.getElementById("onthoud" + welke).classList.toggle("is-active"); 
}
function volgende(){
    document.getElementById("P1").classList.toggle("is-active");
    document.getElementById("P2").classList.toggle("is-active");
    document.getElementById("B1").classList.toggle("is-active");
    document.getElementById("B2").classList.toggle("is-active");
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
    keer = 0;
}
function add1(){
    let name1 = document.getElementById("naam1");
    let naam1 = name1.value;
    document.getElementById("P1").innerHTML = naam1;
    document.getElementById("naam1").remove();
    document.getElementById("add1").remove();
}
function add2(){
    let name2 = document.getElementById("naam2");
    let naam2 = name2.value;
    document.getElementById("P2").innerHTML = naam2;
    document.getElementById("naam2").remove();
    document.getElementById("add2").remove();
}