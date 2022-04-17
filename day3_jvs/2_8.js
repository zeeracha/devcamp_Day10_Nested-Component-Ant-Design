// 2.8 finished
function draw(n){
    let text = "";
    let z = 0;
    let t = 0;
    let k = n + (n-1);
        for (let i = 1; i <= k; i++){
            if (i <= n){
                z++;
            }else{
                z--;
            }
            let loop = n - z;
            for (let j = 0; j < n; j++){
                if (j < loop){
                    text += "-";
                }else{
                    t++;
                    text += t;
                }
            }
            text += "\n";
        }
        console.log(text);
}
draw(2);
draw(3);
draw(4);