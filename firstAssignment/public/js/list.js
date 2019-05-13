$(document).ready(function () {

    $.getJSON('/list-api', printCountries);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/list-api', {item: $('#item').val(),description: $('#desc').val(),priority: $('#priority').val()}, printCountries);
        this.reset();
    });

    


});

function printCountries(terms) {
    $('body>div>ul').empty();
        
    $.each(terms, function () {
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.id="checkbox";
        var ul = document.getElementById('ul'); //ul
        var li = document.createElement('li');//li
        var label = document.createElement('label');//li
        
        li.appendChild(checkbox);
        //  var text = document.getElementsByClassName('cc');

          label.appendChild(document.createTextNode(this.item));
          li.appendChild(label);
        ul.appendChild(li); 
    
       
       // $('<li>').text(this.item).appendTo('body>div>ul');
       // var txt1 = "<input type='checkbox'>create.</input>";   
       // $("ul").append(txt1); 
        // $('<dd>').text(this.description).appendTo('body>div>dl');
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


