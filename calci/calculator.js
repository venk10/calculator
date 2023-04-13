

function display(value) {
    document.getElementById("result").value+=value;
}

function reset(){
    document.getElementById("result").value="";
}

function operation(){
    let expression=document.getElementById("result").value;
    let output=eval(expression);
    document.getElementById("result").value=output;
}
function remove(){
    let last=document.getElementById("result").value;
    let final= last.substring(0,last.length-1)
    document.getElementById("result").value=final;
}