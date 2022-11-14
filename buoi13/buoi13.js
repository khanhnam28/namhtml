function getTwoNumber () {
    const a= document.getElementById("st1") .value ;
    const b= document.getElementById("st2") .value;
    console.log(a);
    console.log(b);
    let list = document.getElementById("myList");
for (let index = a; index <b ; index ++) {
    const c = checkSquareNumber (index) ;
    console.log(c);
    if (c !=null) {
    console.log(c)
    let li = document.createElement("li");
    li.innerText = c;
    list.appendChild(li);
    }
}
}
function checkSquareNumber(n) {
    const i =Math.sqrt(n);
    if (Math.ceil(i) === i) {
    return n;
}
}




