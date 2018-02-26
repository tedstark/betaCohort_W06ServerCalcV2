var requestArray = [null,null,null];

$(document).ready(function () {
    init()
});
function init() {
    enableButtons();
}
function enableButtons() {
    for (var i = 0; i < 10; i++) {
        $("#num" + i).on("click", clickNums);
    }
    $("#oprAdd").on("click", clickOpr);
    $("#oprSub").on("click", clickOpr);
    $("#oprMult").on("click", clickOpr);
    $("#oprDiv").on("click", clickOpr);
    $("#oprEq").on("click", calculate);
    console.log("Buttons Enabled");
}
// function clickNumber() {
//     if(requestArray[0] == null){
//         requestArray[0] = $(this).data("num");
//     } else if (requestArray[2] == null){
//         requestArray[2]=$(this).data("num");
//         sendToServer(requestArray[0], requestArray[1], requestArray[2]);
//     }
//     console.log(requestArray)
// }
// function clickOperator() {
//     if (requestArray[1] == null) {
//         requestArray[1]=$(this).data("opr");
//     }
//     console.log(requestArray);
// }
function clickNums() {
    $("#textArea").val($("#textArea").val()+$(this).data("num"));
    // $("#numberArea").val($("#numberArea").val()+$(this).data("num"));
    console.log($(this).data("num"));
}
function clickOpr() {
    requestArray[0]=$("#textArea").val();
    requestArray[1]=$(this).data("opr");
    $("#textArea").val(null);
    // $("#numberArea").val(null);
    console.log(requestArray);
}
function calculate() {
    requestArray[2]=$("#textArea").val();
    $("#textArea").val(null);
    sendToServer(requestArray[0], requestArray[1], requestArray[2]);
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