
$.getJSON('data.json' , function(data) {
    var number = data['number'];
    $('#SpacePeople').html(number);

    data['people'].forEach(function (d) {
        $('#people').append('<div id= all> <span id = "name">'  + d['name'] + '</span><br> <span id = "craft">  -' + d['craft'] + '-</span> </div>');
    });
});

$(document).ready(function(){
    $(".btn1").click(function(){
      $("#people").hide();
    });
    $(".btn2").click(function(){
      $("#people").toggle();
    });
});