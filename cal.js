function clickme(val)
{
    document.getElementById("myscreen").value+=val;
    
}
function clr(){
    document.getElementById("myscreen").value=""
}

function equalclick(){
    var text=document.getElementById('myscreen').value
    var result= eval(text)
    document.getElementById('myscreen').value=result
}
