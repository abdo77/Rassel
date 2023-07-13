jQuery(  function () {
  $('.form-select').select2({

  });
  $('.modal .form-select').select2('destroy');

  $(window).resize(function () {
    $('.select2-container').css('width', '100%')
  });

  
  
 

  // $.post("https://8e80-62-114-140-19.eu.ngrok.io/admin/allteachers",
  // function(data, status){
  //   alert("Data: " + data + "Status: " + status);
  // });


  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  $('.next').click(function () {

    // Validation

    // First Tab
    
    if ($(this).prop('id') == 'shippingInfo-btn') {
      console.log('hi');
      var counter = 0 ;    
      $('#personalInfo .form-control').each(function(){
        if($(this).val()==0){
           counter++ ;
           $(this).addClass('danger-border')
        }
        else{
          if ($(this).prop('name')=='Email') {
              if(regex.test($(this).val())==false){
                counter++ 
                $(this).addClass('danger-border')
              } 
          }
          
        }
      })
      $('#personalInfo .form-select').each(function(){
        if($(this).val()==0){
           counter++ ;
        }
      })
      if(counter>0){
        $('#' + $(this).prop('id').replace('-btn', '-tab')).addClass('disabled')
      }
      else{
        $('#' + $(this).prop('id').replace('-btn', '-tab')).removeClass('disabled')
      }
    }
    

    // Second Tab

    if($(this).prop('id') == 'paymentInfo-btn'){
      var counter = 0 ;
      $('#shippingInfo input[name="addresses"]').each(function(){
        if($(this).is(':checked')){
          counter++
        }
      })
      $('#shippingInfo input[name="shipMethod"]').each(function(){
        if($(this).is(':checked')){
          counter++
        }
      })
      if(counter != 2){
        iziToast.error({
          title: 'Missing Info',
          message: 'Please Choose The Address and The Shipping Method ',
      });
        $('#' + $(this).prop('id').replace('-btn', '-tab')).addClass('disabled')
      }
      else{
        $('#' + $(this).prop('id').replace('-btn', '-tab')).removeClass('disabled')
      }
    }

    // Third Tab
    if($(this).prop('id') == 'Finish-btn'){
      var counter = 0 ;
      $('#paymentInfo input[name="payments"]').each(function(){
        if($(this).is(':checked')){
          counter++
        }
      })
      if(counter ==0 ){
        iziToast.error({
          title: 'Missing Info',
          message: 'Please Choose The Pyament Method ',
      });
        $('#' + $(this).prop('id').replace('-btn', '-tab')).addClass('disabled')
      }
      else{
        var id = 2020
        setTimeout(() => {
          $('#' + $(this).prop('id').replace('-btn', '-tab')).removeClass('disabled')
          $('#Finish .text-decoration-underline .link-primary').text(id)
          $('#' + $(this).prop('id').replace('-btn', '-tab')).click()
        }, 2000);
      }
    }

    $('#' + $(this).prop('id').replace('-btn', '-tab')).click()

    
  
  })


  $('.prev').click(function () {
    $('#' + $(this).prop('id').replace('-btn', '-tab')).click()
  })
  $('#personalInfo-tab').click(function(){
    $('.select2-container').css('width', '100%')
  })
  $('.savedAddress-label').click(function(){
    $('.savedAddress-label').removeClass('chosed')
    $(this).addClass('chosed')
  })
  $('.shipMethod-label').click(function(){
    $('.shipMethod-label').removeClass('chosed')
    $(this).addClass('chosed')
  })
  $('.payment-label').click(function(){
    $('.payment-label').removeClass('chosed')
    $(this).addClass('chosed')
  })  

  $('.form-control').focus(function(){
    $(this).removeClass('danger-border')
  })
  
})