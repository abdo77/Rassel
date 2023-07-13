jQuery(function () {
    $('.search-container button').click(function (e) {
        e.stopPropagation()
        $(this).next('.input-group').toggle()
    })
    $('body').click(function (e) {
        e.stopPropagation()
        e.preventDefault()
        $('.search-container .input-group').hide()
    })
    $('.search-container .input-group').click(function (e) {
        e.stopPropagation()
    })

    $('.search-container .form-control').keyup(function(){
        var value = $(this).val().toLowerCase();
    $(".msgs").filter(function() {
      if($(this).text().toLowerCase().indexOf(value) > -1 || value == 0){
        $(this).removeClass('d-none')
      }
      else{
        $(this).addClass('d-none')
      }
    });

    })

    $('.sendBtn').click(function () {
        if ($('.chatSend .form-control').val() != 0) {
            $('.chatContent').append(`
            <div class="thisSide-msg msgs d-flex align-items-end me-0 ms-auto">
                        
                        <ul class="msgList list-unstyled mb-0 flex-grow-1">
                            <li class="badge-soft-success rounded-2 p-2 px-3 main-font text-wrap shadow fw-bold my-2 text-end">
                                    ${$('.chatSend .form-control').val()}
                            </li>
                            <div class="msg-time text-muted fs-12 fw-bold mt-2 text-end">
                                <i class="fa fa-check"></i> <span>09:10 am</span>
                            </div>
                        </ul>
                        
                    </div>
            
            `)
            $('.chatSend .form-control').val(null)
            var ht = 0;
            $(".chatContent ul").each(function () {
                ht += $(this).height();
            });
            $(".chatContent").animate({ scrollTop: ht });
        }

        setTimeout(() => {
            $('.chatContent').append(`
            <div class="otherSide-msg msgs d-flex align-items-end">
            <div class="avtr-xs rounded-circle btn-soft-primary flex-shrink-0 d-flex align-items-center justify-content-center mt-auto mb-0 mx-3">
                <i class="fa fa-user main-font "></i>
            </div>
            <ul class="msgList list-unstyled mb-0 ">
                <li class="bg-white rounded-2 p-2 px-3 main-font text-wrap shadow fw-bold my-2">
                        ازيك يا باشا عامل ايه ؟
                </li>
                

                <div class="msg-time text-muted fs-12 fw-bold mt-2">
                    <span>09:10 am</span>
                </div>
            </ul>
        </div>
            
            `)
            var ht = 0;
            $(".chatContent ul").each(function () {
                ht += $(this).height();
            });
            $(".chatContent").animate({ scrollTop: ht });
        }, 2000);
    })

    $('.chatSend .form-control').keyup(function(e){
        if(e.key == 'Enter'){
            
            $('.sendBtn').click()
            
        }
    })



    online = false 
    setTimeout(() => {
        online = true    
        if(online){
            $('.fa.fa-check').removeClass('fa-check').addClass('fa-check-double')
        }
    }, 5000);

})