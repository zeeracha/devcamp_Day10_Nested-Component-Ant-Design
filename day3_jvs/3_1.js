// 3.1
function draw(n) {
    text = "";
    //-----------//
    for (let i = 1; i <= n; i++) {
      for (let j = n; j > i; j--) {
        text += "-";
      }
      for (let k = 0; k < i * 2 - 1; k++) {
        text += "*";
      }
      for (let j = n; j > i; j--) {
        text += "-";
      }
      text += "\n";
    }
    //-----------//
    for (let i = 1; i <= n - 1; i++) {
      for (let j = 0; j < i; j++) {
        text += "-";
      }
      for (let k = (n - i) * 2 - 1; k > 0; k--) {
        text += "*";
      }
      for (let j = 0; j < i; j++) {
        text += "-";
      }
      text += "\n";
    }
    console.log(text);
  }
  
  draw(2);
  draw(3);
  draw(4);