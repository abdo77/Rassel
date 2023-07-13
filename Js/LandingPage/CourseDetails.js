jQuery(function(){
    $('body').on('click','.courseSection .title',function(){
        $(this).toggleClass('show')
    })
    $('button.overlay').click(function(){
        $('.bg-video-overlay').css('display','flex')
    })
    $('.bg-video-overlay').click(function(e){
        $(this).toggle()
        e.stopPropagation()
        $('video').get(0).pause();
        $('video').get(0).currentTime = 0;
    })
    $('video').click(function(e){
        e.stopPropagation()
    })
})