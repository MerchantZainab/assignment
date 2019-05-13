$(document).ready(function () {

    $.getJSON('/list-api', printCountries);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/list-api', {item: $('#item').val(),description: $('#desc').val(),priority: $('#priority').val()}, printCountries);
        this.reset();
    });

});

function printCountries(terms) {
    $('body>div>dl').empty();
    $.each(terms, function () {
    
        $('<dt>').text(this.item).appendTo('body>div>dl');
        $('<dd>').text(this.description).appendTo('body>div>dl');
        // $('<li>').text(addItem).appendTo('body>div>ul')
       
    });
    // $('dt').off('dblclick').dblclick(function() {
    //     $.ajax({
    //         url: '/list-api/' + $(this).text(),
    //         type: 'DELETE',
    //         success: printCountries
    //     });
    // });
}


function addItem(){
    var ul = document.getElementById('ul'); //ul
    var li = document.createElement('li');//li
    
    var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = 1;
        checkbox.name = "todo[]"; 
        checkbox.className="cc";

    


    
    li.appendChild(checkbox);
    //  var text = document.getElementsByClassName('cc');
    //  li.appendChild(document.createTextNode(text.value));
    ul.appendChild(li); 
}
// var button = document.getElementById('btn');
