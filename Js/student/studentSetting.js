jQuery(function(){
    $('.card #myTab button').click(function(){
        $('.card #myTab li').removeClass('active')
        $(this).closest('li').addClass('active')
    })
    $("input[name='date']").flatpickr();
})