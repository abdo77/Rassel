jQuery(function(){
    $('.form-select').select2({

    });
    $('.modal .form-select').select2('destroy');
  
    $('main .form-control').on('keyup',function () {
        var value = $(this).val().toLowerCase();
        $(".card-container .card").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          $('.empty-div').toggle($(this).text().toLowerCase().indexOf(value) <= -1)
        });
    })
    $('.form-select').change(function(){
        console.log($(this).val());
    })
})