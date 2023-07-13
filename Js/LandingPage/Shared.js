jQuery(function () {

    $('.menu-btn').click(function () {
        $(this).toggleClass("change");
        $('header').toggleClass('uncollapsed')
    })

    $('.language-container .selected-lang , .language-container .dropdown-item ').click(function () {
        $('.language-container .dropdown-menu').toggleClass('show')
    })
    // onScroll
    var $w = $(window).scroll(function () {
        console.log($w.scrollTop());
        if ($w.scrollTop() > 0) {
            $('header').addClass('scrolled')
            $('.classForContainer').addClass('classForTransition')
        } else {
            $('header').removeClass('scrolled')
            $('.classForContainer').addClass('show')
            $('.classForContainer').removeClass('classForTransition')
        }
    });
    $('.classForContainer').click(function () {
        $w.scrollTop(0)
    })
    // Set Language for webiste
    let setLang = async (lang) => {

        let elements = document.querySelectorAll("[data-i18n]")

        elements.forEach(async (element) => {

            let transKey = element.getAttribute("data-i18n")
            element.textContent = keys[lang][transKey]


        })

    }

    var lang
    var languages = ['us', 'fr', 'sa']
    if (localStorage.getItem('Lang')) {
        lang = localStorage.getItem('Lang')
        setLang(lang)
        console.log(lang);
        if (lang == 'en') {
            $('.language-container .selected-lang span:nth-child(2)').text(lang)
            $('.language-container .selected-lang .fi').replaceWith('<span class="fi fi-us fis me-1 ms-1"></span>')
        }
        else if (lang == 'ar') {
            $('.language-container .selected-lang span:nth-child(2)').text(lang)
            $('.language-container .selected-lang .fi').replaceWith('<span class="fi fi-sa fis me-1 ms-1"></span>')
            $('body').css('direction', 'rtl')
            $('body').attr('dir', 'rtl')

        }
        if (lang == 'fr') {
            $('.language-container .selected-lang span:nth-child(2)').text(lang)
            $('.language-container .selected-lang .fi').replaceWith('<span class="fi fi-fr fis me-1 ms-1"></span>')
        }
    }
    else {
        lang = 'en'
        $('.language-container .selected-lang .fi').replaceWith('<span class="fi fi-us fis me-1 ms-1"></span>')
    }

    $(' .language-container .dropdown-item ').click(function () {
        console.log($(this).text().toLowerCase());
        $('#langSelector').val($(this).text().toLowerCase()).change()
    })


    $('#langSelector').on('change', async (e) => {
        console.log('hey2');
        setLang(e.target.value)
        localStorage.setItem('Lang', e.target.value)
        $('.language-container .selected-lang span:nth-child(2)').text(e.target.value)
        $('.language-container .selected-lang .fi').replaceWith('<span class="fi fi-' + languages[$("#langSelector").prop('selectedIndex')] + ' fis me-1 ms-1"></span>')
        if(e.target.value=='ar'){
            $('body').css('direction', 'rtl')
            // ----------------------------------------------------
            $('body').attr('dir','rtl')
            // ------------------------------------------------
        }
        else{
            $('body').css('direction', 'ltr')
            //---------------------------------------------
            $('body').attr('dir','ltr')
            //---------------------------------------------
        }
    })


   
})