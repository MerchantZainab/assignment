$(document).ready(function () {

    $.getJSON('/list-api', printCountries);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/list-api', {item: $('#item').val(),description: $('#desc').val(),priority: $('#priority').val()}, printCountries);
        this.reset();
    });
    
});


function printCountries(terms) {

    $('body>table>tbody').empty();
    $.each(terms, function () {
        
var markup = "<tr><td><input type='checkbox' id='checkbox' name='record'></td><td>" + this.item + "</td><td>" + this.description + "</td><td>" + this.priority + "</td><td><input type='button' value='delete' name='delete' class='del-item'></td></tr>";
$("table tbody").append(markup);
    });



//this delete action is working on just item I want this to get deleted when I press del button
   

// $('td').off('click').click(function() {
//         $.ajax({
//             url: '/list-api/' + $(this).text(),
//             type: 'DELETE',
//             success: printCountries
//         });
//     });

};

// $(this).closest('tr').remove();







// $(document).on("click",'.del-item',function(){
    //     //$(this).closest('tr').remove(); 
    //     $.ajax({
    //         url: '/list-api/' + $(this).text(),
    //         type: 'DELETE',
    //         success: printCountries
    //     });
    //  });




        // $(".delete-row").click(function(){
        //     $("table tbody").find('input[name="record"]').each(function(){
        //     	if($(this).is(":checked")){
        //             $(this).parents("tr").remove();
        //         }
        //     });
        // });
//completed items
// var ckbox = $('#checkbox');

// $('#checkbox').on('click',function () {
//     if (ckbox.is(':checked')) {
//         alert('You have Checked it');
//         $.ajax({
//                         url: '/list-api/complete',
//                         type: 'post',
//                         success: printCountries
//                     });
//     } else {
//         alert('You Un-Checked it');
//     }
// });