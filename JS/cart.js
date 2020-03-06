$(document).ready(function () {
    if (typeof Storage !== "undefined") {
        var selected = JSON.parse(localStorage.getItem('selected'));
        var price = JSON.parse(localStorage.getItem('price_arr'));
        var total = JSON.parse(localStorage.getItem('total_arr'));
    }
    else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    var credits = price / 10;
    for (i = 0; i < 1; i++) {
        var total_element = `<div>${total}</div>`;
        $('.total').append(total_element);
        var price_element = `<div>${price}</div>`;
        $('.price').append(price_element);
        var seat_element = `<div>${selected}</div>`;
        $('.seats').append(seat_element);
        var credits_element = `<b>${credits}</b>`;
        $('.credits').append(credits_element);
    }
})

var d = new Date();
document.getElementById("date").innerHTML = d.getUTCDate() + "/ " + (d.getUTCMonth() + 1) + "/ " + d.getFullYear();
