$(document).ready(function () {

    $.getJSON('/list-api', printCountries);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/list-api', {item: $('#item').val(),description: $('#desc').val(),priority: $('#priority').val()}, printCountries);
        this.reset();
    });



function printCountries(terms) {
    $('body>div>ul').empty();
        
    $.each(terms, function () {
        var ul = document.getElementById('ul'); //ul
        var li = document.createElement('li');//li
        // var label = document.createElement('label');//li

        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.id="checkbox";
        checkbox.name="checkme";

        var delButton = document.createElement('input');
        delButton.type="button";
        delButton.id="del";
        delButton.name="del";
        delButton.value="Delete Me";
        
        li.appendChild(checkbox);
         li.appendChild(delButton);

        // label.appendChild(document.createTextNode(`${this.item} ${this.description}`));
        // li.appendChild(label);
        li.appendChild(document.createTextNode(`${this.item} ${this.description}`));
        ul.appendChild(li); 

    });
    // $('li').off('#del').click(function() {
    //     $.ajax({
    //         url: '/list-api/' + $(this).text(),
    //         type: 'DELETE',
    //         success: printCountries
    //     });
    // });
}


$("#isCheck").click(function () {
	alert($('input:checkbox[name=checkme]').is(':checked'));		
    });
});

