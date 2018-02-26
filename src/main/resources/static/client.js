var requestArray = [null,null,null];

$(document).ready(function () {
    init()
});
function init() {
    enableButtons();
}
function enableButtons() {
    for (var i = 0; i < 10; i++) {
        $("#num" + i).on("click", clickNumber);
    }
    $("#oprAdd").on("click", clickOperator);
    $("#oprSub").on("click", clickOperator);
    $("#oprMult").on("click", clickOperator);
    $("#oprDiv").on("click", clickOperator);
}
function clickNumber() {
    if(requestArray[0] == null){
        requestArray[0] = $(this).data("num");
    } else if (requestArray[2] == null){
        requestArray[2]=$(this).data("num");
        sendToServer(requestArray[0], requestArray[1], requestArray[2]);
    }
    console.log(requestArray)
}
function clickOperator() {
    if (requestArray[1] == null) {
        requestArray[1]=$(this).data("opr");
    }
    console.log(requestArray);
}
function clickNums() {
    $("#textArea").append($(this).data("num"));
    console.log($(this).data("num"));
}
function sendToServer(num1, opr, num2) {
    window.location.href="/math/"+num1+"/"+opr+"/"+num2;
}

function goHome() {
    window.location.href="/";
}
function goLog() {
    window.location.href="/log";
}