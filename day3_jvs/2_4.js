// 2.4 finished
function draw(n){
    let text = "";
    let z = 0;
    for (let i = 0; i < n * 2 - 1; i++){
        if (i < n){
            z++;
        }else{
            z--;
        }
        for (let j = 0; j < n; j++){
            if (i >= j && i + j < n * 2 - 1){
                text += z.toString();
            }else{
                text += "-"
            }
        }
        text += "\n";
    }
    console.log(text);
}

draw(2);
draw(3);
draw(4);