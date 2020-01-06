$(document).ready(function () {
    var seats = 80;
    var booked = [1, 2, 3];
    var total = 0;
    var defaultPrice = 50;
    var price = 0;
    var selected = '';
    for (var i = 0; i < seats; i++) {
        if (booked.indexOf(i + 1) == -1)
            $('.seats').append(`<div id="S${i}" class="seat"></div>`);
        else
            $('.seats').append(`<div id="S${i}" class="seat booked"></div>`);
    }
    $('.seat:not(.booked)').click(function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            total--;
        }
        else {
            $(this).addClass('selected');
            total++;
            selected = selected + $(this).attr('id');
        }
        price = defaultPrice * total;
        $('.total').text("Total: " + total);
        $('.price').text("Price: " + price);
        $("p").remove('.snumber');
        $('.sum').append(`<p class="snumber"> Seat: ${selected},</p>`);
    })
});