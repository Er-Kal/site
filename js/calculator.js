let total = 0;
let change = "";
function numberClick(el) {
    change=change+el.value;
    document.getElementById("change").innerHTML=change;
}
function clearTotal(){
    total=0;
    document.getElementById("text").innerHTML=total;
}
function operator(el){
    if (!(parseInt(change)>0))
        pass;
    else if (el.innerHTML=="*")
        total=total*parseInt(change);
    else if (el.innerHTML=="/")
        total=total/parseInt(change);
    else if (el.innerHTML=="^")
        total=total**parseInt(change);
    else if (el.innerHTML=="+")
        total=total+parseInt(change);
    else if (el.innerHTML=="-")
        total=total-parseInt(change);
    document.getElementById("text").innerHTML=total;
    change="";
    document.getElementById("change").innerHTML=change;
}