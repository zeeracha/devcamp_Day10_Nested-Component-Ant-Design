// 2.2 finished
function draw(n) {
    text = "";
    for (let i = n; i > 0; i--){
        for (let j = 1; j <= n; j++) {
            if (i >= j){
                text += "*";
            } else {
                text += "_";
            }
        }   
        text += "\n";
    }
    console.log(text);
}
draw(2);
draw(3);
draw(4);