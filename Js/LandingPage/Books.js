jQuery(async function(){
   

   var books=  {
 
        level1 : [
            
             {
                name :'introduction ' ,
                id:'123',
                img:'../../Assests/6.b2816908.jpg',
                prices:{
                    printed: 10,
                    ebook:5
    
                },
                about:'description',
                author:'John Doe',
                li :'This is li about description'
    
    
        },   {
            name :'Qualify',
            id:'123',
            img:'../../Assests/6.b2816908.jpg',
            prices:{
                printed: 10,
                ebook:5
    
            },
            about:'description',
            author:'John Doe',
            li :'This is li about description'
    
    
    },   {
        name : 'level 1' ,
        id:'123',
        img:'/Assests/6.b2816908.jpg',
        prices:{
            printed: 10,
            ebook:5
    
        },
        about:'description',
        author:'John Doe',
        li :'This is li about description'
    
    
    }
    ],
   
     
    level2 : [
            
        {
           name :'introduction ' ,
           id:'123',
           img:'../../Assests/6.b2816908.jpg',
           prices:{
               printed: 10,
               ebook:5

           },
           about:'description',
           author:'John Doe',
           li :'This is li about description'


   },   {
       name :'Qualify1',
       id:'123',
       img:'../../Assests/6.b2816908.jpg',
       prices:{
           printed: 10,
           ebook:5

       },
       about:'description',
       author:'John Doe',
       li :'This is li about description'


},   {
   name : 'level 1' ,
   id:'123',
   img:'/Assests/6.b2816908.jpg',
   prices:{
       printed: 10,
       ebook:5

   },
   about:'description',
   author:'John Doe',
   li :'This is li about description'


}
],
    
    
    }


    /**
     <div class="owl-item1">
                    <img src="../../Assests/6.b2816908.jpg" alt="" class="img-fluid">
                    <div class="book-info bg-white p-3">
                        <a href="#" class="h3 fw-bold text-decoration-none text-dark title">Book Name</a>
                        <p class=" text-muted tag mb-0">
                            <i class="fa fa-dollar"></i> <span>16</span>
                        </p>
                    </div>
                </div>
     */
                

        for (let i = 0; i < books.level1.length; i++) {
            $('#owl1').append(`
            <div class="owl-item1" id="${books.level1[i].id}">
            <img src="`+ books.level1[i].img +`" alt="" class="img-fluid">
            <div class="book-info bg-white p-3">
                <a href="javascript:void(0)" class="h3 fw-bold text-decoration-none text-dark title">`+ books.level1[i].name +`</a>
                <p class=" text-muted tag mb-0">
                    <i class="fa fa-dollar"></i> <span>`+books.level1[i].prices.printed+`</span>
                </p>
            </div>
        </div>
            `)
            
        }
        for (let i = 0; i < books.level2.length; i++) {
            $('#owl2').append(`
            <div class="owl-item1" id="${books.level1[i].id}">
            <img src="`+ books.level2[i].img +`" alt="" class="img-fluid">
            <div class="book-info bg-white p-3">
                <a href="javascript:void(0)" class="h3 fw-bold text-decoration-none text-dark title">`+ books.level2[i].name +`</a>
                <p class=" text-muted tag mb-0">
                    <i class="fa fa-dollar"></i> <span>`+books.level2[i].prices.printed+`</span>
                </p>
            </div>
        </div>
            `)
            
        }




        setTimeout(() => {
            $('#pills-level2').removeClass('show')
        $('#pills-level2').removeClass('active')
        }, 500);
        $('#pills-level1-tab').click( function(){
         initialize_owl($('#owl1'))

          destroy_owl($('#owl2'))
        })
        $('#pills-level2-tab').click( function(){
           initialize_owl($('#owl2'))
          destroy_owl($('#owl1'))
        })
            initialize_owl($('#owl1'));
          initialize_owl($('#owl2'));
        
           function destroy_owl(el) {
            
          el.trigger('load.owl.lazy'); 
        }



        function initialize_owl(el){
          el.owlCarousel({
                loop:true,
                margin:10,
                dots:true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:3,
                        nav:false
                    },
                    1000:{
                        items:6,
                        nav:false,
                        loop:false
                    }
                } ,
                

            })   
        }

        $('body').on('click','.owl-item1',function(){
            bootbox.dialog({
                message:` 
                    <div class="row mx-0 ">
                        <div class="col-12 text-center">
                            <img src="../../assests/06.png"  class="w-75 mx-auto"/>
                        </div>
                        <div class="col-lg-6 col-12">
                        <div class="mt-4 pt-2 mx-auto text-center"><a class="btn btn-soft-primary m-1" href="#">Buy Now @
                        $16</a>
                </div>
                        </div>
                        <div class="col-lg-6 col-12">
                        <div class="mt-4 pt-2 mx-auto text-center"><a class="btn btn-soft-primary m-1" href="templateBook.html">View Template</a>
                            </div>      
                        </div>
                    </div>
                
                `
                ,

            })
        })        




})