$(document).ready(function () {

    $.getJSON('/list-api', printCountries);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/list-api', {item: $('#item').val(),description: $('#desc').val(),priority: $('#priority').val()}, printCountries);
        this.reset();
    });

});

function printCountries(terms) {
    $('body>dl').empty();
    $.each(terms, function () {
        $('<dt>').text(this.item).appendTo('body>dl');
        $('<dd>').text(this.description).appendTo('body>dl');
        $('<h2>').text(this.priority).appendTo('body>dl');
        
    });
    $('dt').off('dblclick').dblclick(function() {
        $.ajax({
            url: '/list-api/' + $(this).text(),
            type: 'DELETE',
            success: printCountries
        });
    });
}
