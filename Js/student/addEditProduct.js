ClassicEditor
        .create( document.querySelector( '#ckeditor-classic' ) )
        .catch( error => {
            console.error( error );
        } );


        Dropzone.autoDiscover = false;


jQuery(function(){

    $('.dropzone').dropzone({ // camelized version of the `id`
        maxFiles: 2000,
            url: "Assests/",
            success: function (file, response) {
                console.log(response);
            },
        })

        $("#datepicker-publish-input").flatpickr({
            enableTime : true
        });

})

        