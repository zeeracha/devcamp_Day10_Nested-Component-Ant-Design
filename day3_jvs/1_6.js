// 1.6 finshed
function draw(n){
    let text = "";
    let z = 1;
        for (let i = 1; i <= n; i++){
            for (let j = 1; j <= n; j++ ){
                 //text += j;
                 text += z;
                 z++;
            }
                 text += "\n";
        }
        console.log(text);
    }
draw(2); 
draw(3);
draw(4);

