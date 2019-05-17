$(document).ready(function () {

    $.getJSON('/list-api', printCountries);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/list-api', { item: $('#item').val(), description: $('#desc').val(), priority: $('#priority').val() ,status:'pending'}, printCountries);
        this.reset();
    });

});


function printCountries(terms) {

    $('body>table>tbody').empty();
    $.each(terms, function (e) {

        var markup = "<tr><td><input type='checkbox' id='checkbox' name='record'></td><td class='item-td'>" + this.item + "</td><td>" + this.description + "</td><td>" + this.priority + "</td><td ><input type='button' value='delete' class='del' name='delete' ></td></tr>";
        $("table tbody").append(markup);
  
    });

    $('.del').off('click').click(function () {
                $.ajax({
                   url:'/list-api/'+ $(this).closest('tr').find('.item-td').text(),
                   method:'DELETE',
                   success:printCountries
                   })
                   
       });  

    //    var checkbox = $('#checkbox');
    //    $('#checkbox').off('click').click(function(){
    //     if (checkbox.is(':checked')) {
    //        
    //     }
    //    })
    }


