$("#nextBtn").on('click',function(){
    $('.form :visible')
});

$("#addPersonBtn").on('click', function(event){
    debugger
    event.preventDefault();
    var index = $('.person').length + 1;
    $("#persons").append('<div class="person" id="person' + index + '"><div class="personName">Person A</div><label for="fname">First Name</label><input type="text" id="fname" class="firstname" name="firstname" placeholder="Your name.."><label for="lname">Last Name</label><input type="text" id="lname" name="lastname" placeholder="Your last name.."></div>');
});

$('.firstname').on('change',function(){
    debuger
});