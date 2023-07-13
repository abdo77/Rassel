jQuery(function(){
    


    $('.search-container input').on('keyup',function(){
        value = $(this).val()
            $('.course').filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              })
    })
})