function dobel(){
    const gerolt = [];

    const output = document.getElementById("output");
    const output1 = document.getElementById("output1");
    const output2 = document.getElementById("output2");
    const output3 = document.getElementById("output3");
    const output4 = document.getElementById("output4");
    const output5 = document.getElementById("output5");
    const output6 = document.getElementById("output6");
    
    const ogen =  Math.floor(Math.random() * 6) + 1;
    const ogen1 =  Math.floor(Math.random() * 6) + 1;
    const ogen2 =  Math.floor(Math.random() * 6) + 1;
    const ogen3 =  Math.floor(Math.random() * 6) + 1;
    const ogen4 =  Math.floor(Math.random() * 6) + 1;
    console.log(ogen, ogen1, ogen2, ogen3, ogen4);

    gerolt.push(ogen, ogen1, ogen2, ogen3, ogen4);
    console.log(gerolt);

    output.innerHTML = gerolt;

    function countNumber(gerolt, value) {
        var count = 0;
        gerolt.forEach((v) => (v === value && count++));
        return count;
    }
    console.log("1 = " + countNumber(gerolt, 1));
    console.log("2 = " + countNumber(gerolt, 2));
    console.log("3 = " + countNumber(gerolt, 3));
    console.log("4 = " + countNumber(gerolt, 4));
    console.log("5 = " + countNumber(gerolt, 5));
    console.log("6 = " + countNumber(gerolt, 6));

    output1.innerHTML = "1 = " + countNumber(gerolt, 1);
    output2.innerHTML = "2 = " + countNumber(gerolt, 2);
    output3.innerHTML = "3 = " + countNumber(gerolt, 3);
    output4.innerHTML = "4 = " + countNumber(gerolt, 4);
    output5.innerHTML = "5 = " + countNumber(gerolt, 5);
    output6.innerHTML = "6 = " + countNumber(gerolt, 6);

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
}