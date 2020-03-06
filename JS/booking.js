$(document).ready(function () {
    var seats = 80;
    var booked = [1, 2, 3];
    var total = 0;
    var defaultPrice = 50;
    var price = 0;
    var selected = '';
    var price_arr = [];
    var total_arr = [];
    for (var i = 0; i < seats; i++) {
        if (booked.indexOf(i + 1) == -1)
            $('.seats').append(`<div id="${i}" class="seat" itemName="${i}" itemPrice="50"></div>`);
        else
            $('.seats').append(`<div id="${i}" class="seat booked"></div>`);
    }
    $('.seat:not(.booked)').click(function () {
        seatId = $(this).attr('id');
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            total--;
            selected = selected.substring(0, selected.length - seatId.length - 1);
        }
        else {
            $(this).addClass('selected');
            total++;
            selected = (selected == '') ? (seatId) : (selected + ',' + seatId);
        }
        price = defaultPrice * total;
        $('.total').text("Total: " + total);
        $('.price').text("Price: " + price);
        $('.snumber').empty();
        $('.snumber').text(`Seats: ${selected}`);
        price_arr[price_arr.length] = price;
        total_arr[total_arr.length] = total;
    })
    $(".seat").click(function () {
        if (typeof Storage !== "undefined") {
            localStorage.setItem("selected", JSON.stringify(selected));
            localStorage.setItem("price_arr", JSON.stringify(price_arr[price_arr.length - 1]));
            localStorage.setItem("total_arr", JSON.stringify(total_arr[total_arr.length - 1]));
        }
        else
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    })

});