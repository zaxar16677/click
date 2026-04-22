let count = 0;
function summ(){
    count = count + 1;
    document.getElementById("content").innerText = count;
}

function reset() {
    count = 0;
    document.getElementById("content").innerText = count;
}