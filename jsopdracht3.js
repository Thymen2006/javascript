function dobel(){
    const gerolt = [];
    const output = document.getElementById("output");
    const ogen =  Math.floor(Math.random() * 6) + 1;
    const ogen1 =  Math.floor(Math.random() * 6) + 1;
    const ogen2 =  Math.floor(Math.random() * 6) + 1;
    const ogen3 =  Math.floor(Math.random() * 6) + 1;
    const ogen4 =  Math.floor(Math.random() * 6) + 1;
    console.log(ogen, ogen1, ogen2, ogen3, ogen4);

    gerolt.push(ogen, ogen1, ogen2, ogen3, ogen4);
    console.log(gerolt);

    output.innerHTML = gerolt;
}