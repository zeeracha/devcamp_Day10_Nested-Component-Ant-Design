// 3.2 finished
function draw(n){
    let text = "";
    let z = 0;
    let t = n + (n-1);
    let k = 0;
    let r = 0;
        for(let i = 1; i <= t; i++){
            if (i <= n){
                k++;
                num = (r - n) + k;
            }else{
                k--;
                num == num;
            }
            for (let j = 1; j <= t; j++){
                if (num < i-j || n+k <= j){
                    text += "-";
                }else{
                    z++;
                    text += z;
                }
            }
            text += "\n";
            r++;
        }
        console.log(text);
}
draw(2);
draw(3);
draw(4);