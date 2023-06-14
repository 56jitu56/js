
function submitBtnClicked() {
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
let operator = document.getElementById("operator").value;
let answer = eval(num1 + operator + num2);
document.getElementById("answer").value = answer;
}
function clearAnswer() {
document.getElementById("answer").value = "";}