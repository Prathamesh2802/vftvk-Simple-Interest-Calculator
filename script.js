window.onload = function() {
    document.getElementById("principal").focus();
}

function slider() {
    var slider = document.getElementById("slider").value;
    document.getElementById("range").value = slider;


}

function range() {
    var range = document.getElementById("range").value;
    document.getElementById("slider").value = range;
}


function calculation() {

    var principle = document.getElementById("principal").value;
    var rate = document.getElementById("range").value;
    var time = document.getElementById("time").value;
    var time1 = parseInt(time);
    document.getElementById("principal").focus();

    var res;
    var t = new Date();
    let year = t.getFullYear();
    var myear = year;
    myear += time1;
    console.log(myear);
    if (principle == "") {
        alert("Please enter the Interest Amount");
    } else if (principle == "0" || principle <= "0") {
        alert("Please enter the Positive Number");

    } else if (rate == "") {
        alert("Please provide the interest rate");
    } else if (time == "") {
        alert("Please select a specific year for calculating Simple Interest");
    } else {
        res = (principle * rate * time) / 100;
        document.getElementById("result").innerHTML = "If you Deposit &nbsp" + '<span style="background-color:yellow">' + principle + '</span>' + "<br> at an Interest rate of &nbsp" + '<span style="background-color:yellow">' + rate + "</span>" + "<br> You will receive an amount of &nbsp" + '<span style="background-color:yellow">' + res + "</span>" + "<br> In the Year &nbsp" + '<span style="background-color:yellow">' + myear + "</span>";
    }


}