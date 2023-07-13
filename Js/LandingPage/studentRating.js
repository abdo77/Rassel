jQuery(function () {



    students = [
        {
            name: 'Ahmed',
            rate: 3,
            levels: [
                {
                    comment: 'first Level Comment',
                    audio: '../../Assests/kordy.mp4',

                },
                {
                    comment: 'second Level Comment',
                    audio: '../../Assests/yg.mp4',

                },
                {
                    comment: 'third Level Comment',
                    audio: '../../Assests/kordy.mp4',

                }
            ]
        },
        {
            name: 'Abdo',
            rate: 4,
            levels: [
                {
                    comment: 'first Level Comment',
                    audio: '../../Assests/kordy.mp4',

                },
                {
                    comment: 'second Level Comment',
                    audio: '../../Assests/kordy.mp4',

                },
                
            ]
        }
    ]


    for (let i = 0; i < students.length; i++) {
        if(i==0){
            $('.studentsName').append(`
        <li class="nav-item my-2"><a to="#" class="active rounded nav-link" id="studentDetails-tab" data-bs-toggle="tab" data-bs-target="#studentDetails" type="button" role="tab" aria-controls="studentDetails" aria-selected="true">
                                            <div class="text-center py-1">
                                                <h6 class="mb-0">${students[i].name}</h6>
                                            </div>
                                        </a></li>
        `)
        }
        else{
            $('.studentsName').append(`
        <li class="nav-item my-2"><a to="#" class=" rounded nav-link" id="studentDetails-tab" data-bs-toggle="tab" data-bs-target="#studentDetails" type="button" role="tab" aria-controls="studentDetails" aria-selected="true">
                                            <div class="text-center py-1">
                                                <h6 class="mb-0">${students[i].name}</h6>
                                            </div>
                                        </a></li>
        `)
        }

    }
    $('.ratingStars').empty()
    for (let i = 0; i < students[0].rate; i++) {
        
        $('.ratingStars').append('<i class="fa fa-star text-warning"></i>')
    }
    $('.progress-bar').css('width',''+ Math.floor((1/students[0].levels.length)*100)+'%')
    $('.progress-bar').text(Math.floor((1/students[0].levels.length)*100)+'%')
    $('.comment').text(students[0].levels[0].comment)

    let test = {

        m4a: students[0].levels[0].audio,
        oga:students[0].levels[0].audio
    }

    $(' #jquery_jplayer_1').jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", test);
        },
        cssSelectorAncestor: "#jp_container_1",

        supplied: "m4a, oga",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: false,
        remainingDuration: true,
        toggleDuration: true
    });


    currStudent = 0
    currLevel = 0

    $('.next-level').click(function(){
        if(currLevel < students[currStudent].levels.length-1){
            currLevel++
        $('.progress-bar').css('width',''+ Math.floor(((currLevel+1)/students[currStudent].levels.length)*100)+'%')
    $('.progress-bar').text(Math.floor(((currLevel+1)/students[currStudent].levels.length)*100)+'%')
    $('.comment').text(students[currStudent].levels[currLevel].comment)
    $('.levelnum  span').text(currLevel+1)
    $(" #jquery_jplayer_1").jPlayer( "destroy" );
    let test = {

        m4a: students[currStudent].levels[currLevel].audio,
        oga:students[currStudent].levels[currLevel].audio
    }

    $(' #jquery_jplayer_1').jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", test);
        },
        cssSelectorAncestor: "#jp_container_1",

        supplied: "m4a, oga",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: false,
        remainingDuration: true,
        toggleDuration: true
    });
}
    console.log(currLevel);
    })
    $('.prev-level').click(function(){
        if(currLevel > 0){
            currLevel--
        $('.progress-bar').css('width',''+ Math.floor(((currLevel+1)/students[currStudent].levels.length)*100)+'%')
    $('.progress-bar').text(Math.floor(((currLevel+1)/students[currStudent].levels.length)*100)+'%')
    $('.comment').text(students[currStudent].levels[currLevel].comment)
    $('.levelnum span').text(currLevel+1)
    $(" #jquery_jplayer_1").jPlayer( "destroy" );
    let test = {

        m4a: students[currStudent].levels[currLevel].audio,
        oga:students[currStudent].levels[currLevel].audio
    }

    $(' #jquery_jplayer_1').jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", test);
        },
        cssSelectorAncestor: "#jp_container_1",

        supplied: "m4a, oga",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: false,
        remainingDuration: true,
        toggleDuration: true
    });
}
console.log(currLevel);
    })


    $('body').on('click','.studentsName li',function(){
        currLevel = 0 , 
         currStudent  = $(this).index()

         $('.ratingStars').empty()
         for (let i = 0; i < students[currStudent].rate; i++) {
             
             $('.ratingStars').append('<i class="fa fa-star text-warning"></i>')
         }
         $('.progress-bar').css('width',''+ Math.floor((1/students[currStudent].levels.length)*100)+'%')
         $('.progress-bar').text(Math.floor((1/students[currStudent].levels.length)*100)+'%')
         $('.comment').text(students[currStudent].levels[0].comment)
     
         let test = {
     
             m4a: students[currStudent].levels[0].audio,
             oga:students[currStudent].levels[0].audio
         }
     
         $(' #jquery_jplayer_1').jPlayer({
             ready: function () {
                 $(this).jPlayer("setMedia", test);
             },
             cssSelectorAncestor: "#jp_container_1",
     
             supplied: "m4a, oga",
             useStateClassSkin: true,
             autoBlur: false,
             smoothPlayBar: true,
             keyEnabled: false,
             remainingDuration: true,
             toggleDuration: true
         });
    })

})
