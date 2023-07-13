
jQuery(function(){

    $('.counter-value').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                // $(this).text(Math.ceil(now));
               $(this).text(Math.ceil(now).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            }
        });
    });
    $(".flatpickr-input").flatpickr();
    $('#demo-datepicker').flatpickr({
        mode: "range"
    })

    $('body').click(function(){
        $('.customSelect-container ul').removeClass('show')
    })
    $('.customSelect').click(function(e){
        e.stopPropagation()
        e.preventDefault()
        $(this).closest('.customSelect-container ').find('ul').toggleClass('show')
    })
    $.fn.customSelect = function(){
        id = $(this).prop('id')

        $('#'+id+' > option').each(function(){
            $('.customSelect-container #'+id+' + ul').append(`
            <li>
            <a href="#" class="main-font text-dark text-decoration-none d-block p-2" data-val="`+ $(this).val() +`">`+$(this).text()+`</a>
            </li>
            `)
        })
    }
    $('.customSelect-container select').each(function(){
        $(this).customSelect()
    })


    $('body').on('click','.customSelect-container ul a',function(){
        console.log('clicked');
        $(this).closest('.customSelect-container').find('select').val($(this).attr('data-val')).change()
   
       
    })
    
    $('.customSelect-container').find('select').change(function(){
        $(this).closest('.customSelect-container').find('.customSelect').val($(this).find('option:selected').text())
    })


$('.search-btn').click(function(){
    var value = $(this).closest('.row').find('input[type="text"]').val().toLowerCase();
    var date = $(this).closest('.row').find('.flatpickr-input').val().toLowerCase().split(' to ')
    var dateStart = new Date(date[0]).getTime()
    var dateEnd = new Date(date[1]).getTime()
    console.log(value +'2' + $(this).closest('.row').find('.flatpickr-input').val() +' 3'  + $('#status').val());
    console.log(dateStart + '  ' + dateEnd);
    console.log($('#status').val());
    // $("table tbody tr").filter(function() {
    //     if(value == 0 && $(this).closest('.row').find('.flatpickr-input').val() == 0 && $('#status').val()==null){
    //         $(this).show()
    //     }
    //     else if($(this).text().toLowerCase().indexOf(value) > -1 && $(this).closest('.row').find('.flatpickr-input').val() == 0 && $('#status').val()==null){
    //         $(this).show()
    //     }  
    //     else if(value == 0 && (dateStart >= new Date($(this).find('td:nth-child(5)').text()).getTime() && dateEnd <= new Date($(this).find('td:nth-child(6)').text()).getTime() ) && $('#status').val()==null){
    //         $(this).show()
    //     }
    //     else if(value == 0 && $(this).closest('.row').find('.flatpickr-input').val() == 0 && $(this).find('td:nth-child(7) span').text().toLowerCase() == $('#status').find('option:selected').text().toLowerCase()){
    //         $(this).show()
    //     }
    //     else if($(this).text().toLowerCase().indexOf(value) > -1 && (dateStart >= new Date($(this).find('td:nth-child(5)').text()).getTime() && dateEnd <= new Date($(this).find('td:nth-child(6)').text()).getTime() ) && $(this).find('td:nth-child(7) span').text().toLowerCase() == $('#status').find('option:selected').text().toLowerCase()){
    //     $(this).show()
    //   }
    //   else{
    //     $(this).hide()
    //   }
    // });
    $("table tbody tr").filter(function() {
        var show = true
        if(value == 0 && $(this).closest('.row').find('.flatpickr-input').val() == 0 && $('#status').val()==null){
            show =true
        }
        else{
        if($(this).text().toLowerCase().indexOf(value) > -1){
        }  
        else{
            show = false
        }
        if( (dateStart >= new Date($(this).find('td:nth-child(5)').text()).getTime() && dateEnd <= new Date($(this).find('td:nth-child(6)').text()).getTime() )||$(this).closest('.row').find('.flatpickr-input').val() == 0  ){
        }
        else{
            show = false
        }
        if( $(this).find('td:nth-child(7) span').text().toLowerCase() == $('#status').find('option:selected').text().toLowerCase() || $('#status').find('option:selected').text().toLowerCase() == 'all' || $('#status').val()==null ){
        }
        else{
            show = false
        }
    }

    if(show){
        $(this).show()
    }
    else{
        $(this).hide()
    }

    });
})




})

