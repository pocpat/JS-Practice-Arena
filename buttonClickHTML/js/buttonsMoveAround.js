
let btnsArr = [1,2,3,6,9,8,7,4];
let btn5 = document.getElementById('btn5');
btn5.onclick = function() {
    btnsArr.unshift(btnsArr.pop());
    document.getElementById('btn1').innerHTML = btnsArr[0];
    document.getElementById('btn2').innerHTML = btnsArr[1];
    document.getElementById('btn3').innerHTML = btnsArr[2];
    document.getElementById('btn6').innerHTML = btnsArr[3];
    document.getElementById('btn9').innerHTML = btnsArr[4];
    document.getElementById('btn8').innerHTML = btnsArr[5];
    document.getElementById('btn7').innerHTML = btnsArr[6];
    document.getElementById('btn4').innerHTML = btnsArr[7];
}

