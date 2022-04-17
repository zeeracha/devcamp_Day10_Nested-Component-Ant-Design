// 2.10 finished
function draw(n){
    let text = "";
    let z = 1;
    let k = n + (n-1);
        for (let i = 1; i <= n; i++){
            for (let j = 1; j <= k; j++){
                if (1 <= i-j || n+n+1 <= j+i){
                    text += "-";
                }else{
                    text += "*"
                }
            }
            text += "\n"
        }
        console.log(text);
}
draw(2);
draw(3);
draw(4);