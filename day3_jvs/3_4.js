// เก็บ array 2 มิติก่อน
//if else  วน loop ซ้อน loop
// วน loop j
//ตัวแปร 

function draw(n) {
    
let text = '';
    
    for (let i = 1; i <= n; i++) {
    
    for (let j = n-i; j >= 1; j--) {
        text = text + '-';
    }
    for (let j = 1; j <= 2*i-1; j++) {
    
        text = text + '*';
    }
    
    for (let j = n-i; j >= 1; j--) {
        text = text + '-';
    }
    
        text = text + '\n';
    
    }
    
    for (let i = n-1; i >= 1; i--) {
    
    for (let j = n-i; j >= 1; j--) {
        text = text + '-';
    }
    for (let j = i*2-1; j >= 1; j--) {
    
        text = text + '*';
    }
    
    for (let j = n-i; j >= 1; j--) {
        text = text + '-';
    }
    text = text + '\n';
    
    }
    
    console.log(text);
    
    }

    draw(2);
    draw(3);
    draw(4);
 

