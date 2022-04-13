//1.7
function draw(n){
    let text = "";
    let z = 1;
        for (let i = 0; i < n; i++){
            for (let j = 0; j < n; j++ ){
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

// ยังไม่เสร็จ
