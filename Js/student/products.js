jQuery(function(){
    $("table#wrapper").Grid({
        pagination:true ,
        search:true,
        sort:true ,
        
    });

    $("table#wrapper2").Grid({
        pagination:true ,
        search:true,
        sort:true ,
        
    });

    
    
    var el = document.querySelector('#productnav-all .gridjs-search-input');
    var el2 = document.querySelector('#productnav-published .gridjs-search-input');

    console.log(el);
    

    setTimeout(() => {
        $('#productnav-published').removeClass('active')
    }, 1000);
    
    $('#searchProductList').keyup(function(){
    // Create and dispatch the event
    $('.gridjs-search-input').val($(this).val())

    var event = new Event('input', {
        bubbles: true,
        cancelable: true,
    });
    el.dispatchEvent(event);
    el2.dispatchEvent(event);
    })

    

    $('body').on( 'change', 'table .form-check-input',function(){
        console.log('sadasdsad');
        if(!this.checked){
            $('#selection-element').css('display','none')
        }
        else{
            $('#selection-element').css('display','block')
        }
    })
    
    $('table .form-check-input').change(function () {
        alert('changed');
     })
})