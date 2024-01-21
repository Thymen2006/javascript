
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
}
  
