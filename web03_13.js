function myName() {
    var person = prompt("Enter your name");
    if (person == null || person == "") {
        text = "You entered nothing.";
    } else {
        text = "Name: " + person;
    }
    document.getElementById("test").innerHTML = text;
}

function myCalculate() {
    var num1 = prompt("Enter first value");
    var num2 = prompt("Enter second value");
    var num3 = prompt("Enter third value");
    var first_num = parseInt(num1)
    var second_num = parseInt(num2)
    var third_num = parseInt(num3)
    var sum = first_num + second_num + third_num;
    var product = first_num * second_num * third_num;
    document.getElementById("calculate").innerHTML = "Sum: " + sum + "<br>" + "Product: " + product;
}

function myPoints() {
    var wins = prompt("Enter the number of wins");
    var draws = prompt("Enter the number of draws");
    var losses = prompt("Enter the number of losses");
    var noWins = (parseInt(wins))*3;
    var noDraws = parseInt(draws);
    var noLosses = (parseInt(losses))*0;
    var total = noWins + noDraws + noLosses;
    document.getElementById("point").innerHTML = "Total Points: " + total;
}