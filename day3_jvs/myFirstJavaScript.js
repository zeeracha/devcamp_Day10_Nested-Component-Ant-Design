//debugger;
/* text = '';
for (let i=0; i<1; i++) {
    for (let j=0; j<3; j++) {
        text += '-';
    }
    text += '\n';
}
console.log(text);
*/

// 1.1 **
star = '';
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 1; j++) {
        star += '*';
    }
}
console.log(star);

// 1.1 ***
star = '';
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 1; j++){
        star += '*';
    }
}
console.log(star);

// 1.1 ***
star = '';
for (let i=0; i < 4; i++) {
    for (let j = 0; j < 1; j++){
        star += '*';
    }
}
console.log(star);

// 1.2  **, **

star = '';
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);

star = '';
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);

star = '';
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);

// 1.3
//
function draw(n){
let text = "";
    for (let i = 1; i < n; i++){
        for (let j = 1; j <= n; j++ ){
            text += j;
        }
        text += "\n";
    }
    console.log(text);
}
draw(2);
draw(3);
draw(4);

//1.4 function draw(n){
function draw(n){
let text = "";
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= n; j++ ){
             text += i;
        }
             text += "\n";
    }
    console.log(text);
}
draw(2);
draw(3);
draw(4);
   
function draw(n){
    let text = "";
        for (let i = n; i >= 1; i--){
            for (let j = 1; j <= n; j++ ){
                 text += i;
            }
                 text += "\n";
        }
        console.log(text);
    }
    draw(2);
    draw(3);
    draw(4);

function draw(n){
    let text = "";
        for (let i = n; i >= 1; i--){
            for (let j = 1; j <= n; j++ ){
                 text += i;
            }
                 text += "\n";
        }
        console.log(text);
    }
    draw(2);
    draw(3);
    draw(4);

// 1.5
function draw(n){
    let text = "";
        for (let i = n; i >= 1; i--){
            for (let i = n; i >= 1; i--){
                 text += i;
            }
                 text += "\n";
        }
        console.log(text);
    }
    draw(2);
    draw(3);
    draw(4);

    /*
//1.6

function draw(n){
    let text = "";
    let z = 1;
        for (let i = 1; i < n; i++){
            for (let j = 1; j >= 4; j++ ){
                 text += z;
                 z++;
            }
                 text += "\n";
        }
        console.log(text);
    }
    draw(4);
    */te
