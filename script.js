function removeJoin(e){
    e.remove();
}

function alertSearch(){
    var element = document.querySelector("#search");
    console.log(element.value);

    alert("You are searching for " + element.value);
}

function like(id){
    var element = document.querySelector(id);
    element.innerText = parseInt(element.innerText) + 1;
}