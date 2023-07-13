jQuery(function () {

    
    $(".mCustomScrollbar1").mCustomScrollbar({
        axis: "y",
        autoHideScrollbar: true,
        scrollInertia: 0
        // horizontal scrollbar
    });
    

   

    $('.menu-link').click(function () {
        $(this).toggleClass('selected')
    })
    $('.main-link').click(function () {
        $('aside').removeClass('collapsed')
        $('header').removeClass('collapsed')
        $('.toggle').removeClass('collapsed')
        $('main').removeClass('collapsed')
    })
    $('.toggle').click(function(){
        $('aside').toggleClass('collapsed')
        $('main').toggleClass('collapsed')
        $('aside .dropdown-menu').removeClass('show')
        $('header').toggleClass('collapsed')
        $('.toggle').toggleClass('collapsed')
        $('.bg-overlay').toggleClass('show')
    })
    $('.bg-overlay').click(function(){
        $(this).removeClass('show')
        $('aside').addClass('collapsed')
        $('main').addClass('collapsed')
        $('.toggle').addClass('collapsed')
        $('header').addClass('collapsed')
    })
    $('.nav-item.lang .lang-link').click(function (e) {
        $(this).toggleClass('active')
        $(this).next('ul').toggleClass('show')
        e.stopPropagation()
        $('.notification .noti-container').removeClass('show')
        $(' .noti-link').removeClass('active')
        $(' .prof-link').removeClass('active')
        $('.profile .dropdown-menu').removeClass('show')
        $('header .input-group').removeClass('show')
        $(' .search-link').removeClass('active')

    })
    $('.nav-item.search .search-link').click(function (e) {
        $(this).toggleClass('active')
        $('header .input-group').toggleClass('show')
        e.stopPropagation()
        $('.notification .noti-container').removeClass('show')
        $(' .noti-link').removeClass('active')
        $(' .prof-link').removeClass('active')
        $('.profile .dropdown-menu').removeClass('show')
        $('.lang .dropdown-menu').removeClass('show')
        $(' .lang-link').removeClass('active')

    })
    $('.nav-item.profile .prof-link').click(function (e) {
        $(this).toggleClass('active')
        $(this).next('ul').toggleClass('show')
        e.stopPropagation()
        $('.notification .noti-container').removeClass('show')
        $(' .noti-link').removeClass('active')
        $('.lang .dropdown-menu').removeClass('show')
        $(' .lang-link').removeClass('active')
        $('header .input-group').removeClass('show')
        $(' .search-link').removeClass('active')

    })

    $('.nav-item.notification .noti-link').click(function (e) {
        $(this).next('.card').toggleClass('show')
        $(this).toggleClass('active')
        e.stopPropagation()
        $('.lang .dropdown-menu').removeClass('show')
        $('.lang-link').removeClass('active')
        $('.profile .dropdown-menu').removeClass('show')
        $(' .prof-link').removeClass('active')
        $('header .input-group').removeClass('show')
        $(' .search-link').removeClass('active')

    })

    $('.nav-item.lang .dropdown-menu').click(function (e) {
        e.stopPropagation()
    })
    $('.nav-item.profile .dropdown-menu').click(function (e) {
        e.stopPropagation()
    })
    $('.nav-item.notification .noti-container').click(function (e) {
        e.stopPropagation()

    })
    $('header .input-group').click(function(e){
        e.stopPropagation()
    })
    $('body').click(function (e) {
        $('.lang .dropdown-menu').removeClass('show')
        $('.notification .noti-container').removeClass('show')
        $('.profile .dropdown-menu').removeClass('show')
        $('.lang-link').removeClass('active')
        $('.prof-link').removeClass('active')
        $(' .noti-link').removeClass('active')
        $(' .search-link').removeClass('active')
        $('header .input-group').removeClass('show')
        e.stopPropagation()
    })
})