function slider() {
    var slider = document.getElementById("slider").value;
    if (slider) {
        document.getElementById("range").value = slider;
    }


}

function range() {
    var range = document.getElementById("range").value;
    if (range) {
        document.getElementById("slider").value = range;
    }
}

function calculation() {

    var principle = document.getElementById("principal").value;
    var rate = document.getElementById("range").value;
    var time = document.getElementById("time").value;
    var time1 = parseInt(time);
    var res;
    var t = new Date();
    let year = t.getFullYear();
    var myear = year;
    myear += time1;
    console.log(myear);
    if (principle == "") {
        alert("Please enter the Interest Amount");
    } else if (rate == "") {
        alert("Please provide the interest rate");
    } else if (time == "") {
        alert("Please select a specific Time Period for calculating S.I.");
    } else {
        res = (principle * rate * time) / 100;
        document.getElementById("result").innerHTML = "If you Deposit &nbsp" + principle + "<br> at an Interest rate of &nbsp" + rate + "<br> You will receive an amount of &nbsp" + res + "<br> In the Year &nbsp" + myear;
    }


}