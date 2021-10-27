const label = document.querySelector(".label");

let btn = document.querySelector(".btn");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";

let generAns = "";

generate();
//btn.addEventListener("click", check());

function getSign(type) {
    return type[Math.floor(Math.random() * type.length)];
}
function check(){
    let inputAns = document.querySelector(".text");
  if(inputAns.value == generAns){
      alert("right");
  }else{
      alert("wrong");
  }
}

function generate(){
    let len = Math.random() * (4 - 2) + 2;
    
    for(let i = 0; i < len; i++){
        generAns +=  genX();
    }
    label.innerText = generAns;
}
function genX(){
    const xs = [];
    xs.push(getSign(upperLetters));
    xs.push(getSign(lowerLetters));
    xs.push(getSign(numbers));
    return getSign(xs);
}