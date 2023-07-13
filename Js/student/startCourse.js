jQuery(async function () {
  $('.form-select').select2({

  });

  $(window).resize(function () {
    $('.select2-container').css('width', '100%')


  });
  $(".mCustomScrollbar2").mCustomScrollbar({
    axis: "y",
    autoHideScrollbar: true,
    scrollInertia: 0
    // horizontal scrollbar
  });



  try {
    var data = await $.get("https://a6c6-2a09-bac5-30bc-16a0-00-241-19.eu.ngrok.io/admin/allteachers")
    var students = await $.get("https://a6c6-2a09-bac5-30bc-16a0-00-241-19.eu.ngrok.io/admin/course-students/63f97d33343fb3c005fb6ed9")
    var dates = await $.get("https://a6c6-2a09-bac5-30bc-16a0-00-241-19.eu.ngrok.io/admin/extract-date-from-course/63f97d33343fb3c005fb6ed9")
    console.log(dates);
    if (data.success) {
      for (let i = 0; i < data.teachers.length; i++) {
        $('#personalInfo .form-select').append(`
          <option value="`+ data.teachers[i].id + `"> ` + data.teachers[i].username + ` </option>
        `)
      }

    }
    for (let i = 0; i < students.accepted.length; i++) {
      $('#shippingInfo .students-container').append(`
      <div id="`+ students.accepted[i].user_id + `" class="col-xl-4 col-12 mb-3 d-flex flex-wrap align-items-center student">
      <div  style="font-size: 18px;"  class="rounded-circle p-2  bg-soft-danger text-danger fw-bold">
          `+ students.accepted[i].username.slice(0, 2).toUpperCase() + `
      </div>
     <p class="mb-0 ms-2 fw-bold">
       `+ students.accepted[i].username + `
     </p>
     <button type="button" class="btn shadow-none bg-light rounded-2 ms-auto fw-bold  border-1">Remove</button>
      </div>
      `)
    }

    for (let i = 0; i < dates.length; i++) {
      $('.payments-container').append(`
      <div class="col-xl-4 col-12 mb-3">
      <label for="payment`+i+`" class="payment-label rounded-3 p-2" data-bs-toggle="collapse" data-bs-target=".date-tab:not(.show)" role="button" aria-expanded="false" aria-controls="date`+i+`">
          <div class="d-flex ">
              <i class="fa fa-check-circle ms-auto me-0"></i>
          </div>
          <div class="paymentInfo-container ps-2 pe-3">
              <div  class="text-black fw-bolder my-2 d-flex">
                  <p class="me-2 float-start mb-0">
                      <i style="font-size: 18px;" class="fa fa-calendar-check "></i> 
                  </p>
                  <p class="mb-0"><div style="font-size: 14px;" class="d-block dateDetails">#`+(i+1)+` <span class="dayName">`+dates[i].day+`</span> <span class="Date">`+dates[i].date+`</span> </span> <span class="text-muted d-block"><strong class="text-white">#1</strong>  <span class="time">`+dates[i].time+`</span> - <span class="duration">`+dates[i].duration +`</span>   hour </div> </p>
              </div>
              
          </div>
           <input type="radio" name="dates" class="d-none" id="payment`+i+`">
      </label>
  </div>          
      `)

    }
  } catch (err) {
    console.log(err.message)
  }

  $('body').on('click','.payment-label',function(){
    $('.payment-label').removeClass('chosed')
    $(this).addClass('chosed')
    console.log('he');
    $('.date-tab').remove()
    $('.date-tab-container').append(`
    <div class="collapse show date-tab" id="`+$(this).attr('aria-controls')+`">
    <div class="card  p-4 border shadow-none mb-0 mt-4">
        <div class="row mx-0">
            <div class="col-xl-4 col-12 mb-3">
                <div class="input-group d-block">
                    <label class="form-label w-100" for="time">Select Time</label>
                    <input type="text" class="flatpickr2 bg-white form-control w-100" name="time" value="`+dates[$(this).closest('.mb-3').index()].time+`" id="">
                </div>
            </div>
            <div class="col-xl-4 col-12 mb-3">
                <div class="input-group d-block">
                    <label class="form-label w-100" for="time">Select Date</label>
                    <input class="flatpickr form-control w-100 bg-white" type="text" value="`+dates[$(this).closest('.mb-3').index()].date+`" readonly="readonly">                                                                </div>
            </div>
            <div class="col-xl-4 col-12 mb-3">
                <div class="input-group d-block">
                    <label class="form-label w-100" for="time">Select Duration (Hour)</label>
                    <input class=" form-control w-100 duration-num" value="`+dates[$(this).closest('.mb-3').index()].duration+`" type="number" >                                                                </div>
            </div>
            <div class="col-12 text-end">
                <button type="button" class="btn btn-danger shadow" data-bs-toggle="collapse" data-bs-target=".date-tab.show" role="button" aria-expanded="false" aria-controls="date`+$(this).attr('aria-controls')+`">Cancel</button>
                <button type="button" class="btn btn-success shadow" data-bs-toggle="collapse" data-bs-target=".date-tab.show" role="button" aria-expanded="false" aria-controls="date`+$(this).attr('aria-controls')+`">Save</button>
            </div>
        </div>

    </div>
    
</div>
    `)
    $(".flatpickr").flatpickr();
  $(".flatpickr2").flatpickr({
    noCalendar: true,
    enableTime: true,
  });

  })


  $('body').on('click','.date-tab-container .btn-success',function(){
    var index = Number($(this).closest('.date-tab').prop('id').slice("4"));
    console.log(index);
    $('.payments-container .mb-3:nth-child('+ (index+1) +')').find('.paymentInfo-container').remove()
    $('.payments-container .mb-3:nth-child('+ (index+1) +')').find('.payment-label').append(`
    <div class="paymentInfo-container ps-2 pe-3">
    <div class="text-black fw-bolder my-2 d-flex">
        <p class="me-2 float-start mb-0">
            <i style="font-size: 18px;" class="fa fa-calendar-check "></i> 
        </p>
        <p class="mb-0"><div style="font-size: 14px;" class="d-block dateDetails">#`+ (index+1) +`<span class="dayName">`+moment($('.flatpickr').val()).format('dddd')+`</span><span class="Date">`+$('.flatpickr').val()+`</span> </span> <span class="text-muted d-block"><strong class="text-white">#1</strong> <span class="time">`+$('.flatpickr2').val()+`</span> - <span class="duration">`+$('.duration-num').val() +`</span> hour </div> </p>
        </div>
    
</div>
    `)
  })

  // Add Student ///////


  $('.add-new-student').on('click', async function (data) {

    // username , id
    var id = $('#addAddress .form-select').val()
    var name = $('#addAddress .form-select option:selected').text()
    console.log(id, name)

    var add_studnet = await $.post('https://a6c6-2a09-bac5-30bc-16a0-00-241-19.eu.ngrok.io/admin/add-student-into-course/63f97d33343fb3c005fb6ed9', {

      user_id: id


    })

    if (add_studnet.msg == 'Added' && add_studnet.success == true) {
      // add user to list 
      $('#shippingInfo .students-container').append(`
      <div id="`+ id + `" class="col-xl-4 col-12 mb-3 d-flex flex-wrap align-items-center student">
      <div  style="font-size: 18px;"  class="rounded-circle p-2  bg-soft-danger text-danger fw-bold">
          `+ name.slice(0, 2).toUpperCase() + `
      </div>
     <p class="mb-0 ms-2 fw-bold">
       `+ name + `
     </p>
     <button type="button" class="btn shadow-none bg-light rounded-2 ms-auto fw-bold  border-1">Remove</button>
      </div>
      `)


      //    
    }
    console.log(add_studnet.msg)

    // send to server while res is return 

    //post reqoust => add this user to course 
    // return done 


  })






  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  $('.next').click(async function () {

    // Validation

    // First Tab

    if ($(this).prop('id') == 'shippingInfo-btn') {
      console.log('hi');
      var counter = 0;
      $('#personalInfo .form-control').each(function () {
        if ($(this).val() == 0) {
          counter++;
          $(this).addClass('danger-border')
        }
        else {
          if ($(this).prop('name') == 'Email') {
            if (regex.test($(this).val()) == false) {
              counter++
              $(this).addClass('danger-border')
            }
          }

        }
      })
      $('#personalInfo .form-select').each(function () {
        console.log($(this).val());
        if ($(this).val() == null) {
          counter++;
        }
      })
      if (counter > 0) {
        $('#' + $(this).prop('id').replace('-btn', '-tab')).addClass('disabled')
      }
      else {
        $('#' + $(this).prop('id').replace('-btn', '-tab')).removeClass('disabled')
      }
    }


    // Second Tab

    if ($(this).prop('id') == 'paymentInfo-btn') {
      $('#' + $(this).prop('id').replace('-btn', '-tab')).removeClass('disabled')
      $('#' + $(this).prop('id').replace('-btn', '-tab')).click()
    }

    // Third Tab
    if ($(this).prop('id') == 'Finish-btn') {
      
      var courses = []
      $('.dateDetails').each(function(){
       let day ;
    if( $(this).find('.dayName').text() == 'Monday'){
          day = 1
        }
        else if( $(this).find('.dayName').text() == 'Tuesday'){
        day = 2
       }
       else if( $(this).find('.dayName').text() == 'Wednesday'){
        day = 3
       }
       else if( $(this).find('.dayName').text() == 'Thursday'){
        day = 4
       }
       else if( $(this).find('.dayName').text() == 'Friday'){
        day = 5
       }
       else if( $(this).find('.dayName').text() == 'Saturday'){
        day = 6
       }  
       else if( $(this).find('.dayName').text() == 'Sunday'){
        day = 7
       }

      let  daay = $(this).find('.dayName').text()
      let duration =  Number($(this).find('.duration').text())
      let time= $(this).find('.time').text()
      let number= day
      let date= $(this).find('.Date').text()

      courses.push({day:daay,duration,time,number,date})
      })
      let J_son = JSON.stringify(courses)
      console.log(J_son)
      
      var add_dates = await $.post('https://a6c6-2a09-bac5-30bc-16a0-00-241-19.eu.ngrok.io/admin/start-course/63f97d33343fb3c005fb6ed9', {

      dates:courses

    })


    if(add_dates.msg == 'Course Started' && add_dates.success == true){
      $('#' + $(this).prop('id').replace('-btn', '-tab')).removeClass('disabled')
      $('#' + $(this).prop('id').replace('-btn', '-tab')).click()
    }else {

      document.getElementById('error-msg').innerText = add_dates.msg
      $('#error-not-Msg').modal('show')
    }

      
    }

    $('#' + $(this).prop('id').replace('-btn', '-tab')).click()



  })


  $('.prev').click(function () {
    $('#' + $(this).prop('id').replace('-btn', '-tab')).click()
  })
  $('#personalInfo-tab').click(function () {
    $('.select2-container').css('width', '100%')
  })
  $('.savedAddress-label').click(function () {
    $('.savedAddress-label').removeClass('chosed')
    $(this).addClass('chosed')
  })
  $('.shipMethod-label').click(function () {
    $('.shipMethod-label').removeClass('chosed')
    $(this).addClass('chosed')
  })
  

  $('.form-control').focus(function () {
    $(this).removeClass('danger-border')
  })



  $('.addAdress').click(async function () {
    var availableStudents = await $.get("https://a6c6-2a09-bac5-30bc-16a0-00-241-19.eu.ngrok.io/admin/course-available-students/63f97d33343fb3c005fb6ed9")

    console.log(availableStudents);
    $('#addAddress .form-select option').each(function () {
      if ($(this).val() != null) {
        $(this).remove()
      }
    })
    for (let i = 0; i < availableStudents.users.length; i++) {
      $('#addAddress .form-select').append(`
      <option value = "`+ availableStudents.users[i].user_id + `">` + availableStudents.users[i].username + `</option> 
      `)

    }
  })
  // remove-student-from-course/63f97d33343fb3c005fb6ed9
  $('body').on('click', '.student .btn', async function () {


    var id = $(this).closest('.student').prop('id')
    var remove_studnet = await $.post('https://a6c6-2a09-bac5-30bc-16a0-00-241-19.eu.ngrok.io/admin/remove-student-from-course/63f97d33343fb3c005fb6ed9', {

      user_id: id


    })
    if (remove_studnet.msg == 'Removed Successfully' && remove_studnet.success == true) {
      $(this).closest('.student').remove()
    }
  })

  

  

})





/*


[
  {"day":"Monday","duration":1,"time":"12:00","number":1,"date":"2023-03-20"},
  {"day":"Sunday","duration":0.75,"time":"12:00","number":7,"date":"2023-03-19"},
  {"day":"Monday","duration":1,"time":"12:00","number":1,"date":"2023-03-27"},{"day":"Sunday","duration":0.75,"time":"12:00","number":7,"date":"2023-03-26"},{"day":"Monday","duration":1,"time":"12:00","number":1,"date":"2023-04-03"},{"day":"Sunday","duration":0.75,"time":"12:00","number":7,"date":"2023-04-02"},{"day":"Monday"

[Object: null prototype] {
  'dates[0][day]': 'Monday',
  'dates[0][duration]': '1',
  'dates[0][time]': '12:00',
  'dates[0][number]': '1',
  'dates[0][date]': '2023-03-20',
  'dates[1][day]': 'Sunday',
  'dates[1][duration]': '0.75',
  'dates[1][time]': '12:00',
  'dates[1][number]': '7',
  'dates[1][date]': '2023-03-19',
  'dates[2][day]': 'Monday',
  'dates[2][duration]': '1',
  'dates[2][time]': '12:00',
  'dates[2][number]': '1',
  'dates[2][date]': '2023-03-27',
  'dates[3][day]': 'Sunday',
  'dates[3][duration]': '0.75',
  'dates[3][time]': '12:00',
  'dates[3][number]': '7',
  'dates[3][date]': '2023-03-26',
  'dates[4][day]': 'Monday',
  'dates[4][duration]': '1',
  'dates[4][time]': '12:00',
  'dates[4][number]': '1',
  'dates[4][date]': '2023-04-03',
  'dates[5][day]': 'Sunday',
  'dates[5][duration]': '0.75',
  'dates[5][time]': '12:00',
  'dates[5][number]': '7',
  'dates[5][date]': '2023-04-02',
  'dates[6][day]': 'Monday',
  'dates[6][duration]': '1',
  'dates[6][time]': '12:00',
  'dates[6][number]': '1',
  'dates[6][date]': '2023-04-10',
  'dates[7][day]': 'Sunday',
  'dates[7][duration]': '0.75',
  'dates[7][time]': '12:00',
  'dates[7][number]': '7',
  'dates[7][date]': '2023-04-09',
  'dates[8][day]': 'Monday',
  'dates[8][duration]': '1',
  'dates[8][time]': '12:00',
  'dates[8][number]': '1',
  'dates[8][date]': '2023-04-17',
  'dates[9][day]': 'Sunday',
  'dates[9][duration]': '0.75',
  'dates[9][time]': '12:00',
  'dates[9][number]': '7',
  'dates[9][date]': '2023-04-16',
  'dates[10][day]': 'Monday',
  'dates[10][duration]': '1',
  'dates[10][time]': '12:00',
  'dates[10][number]': '1',
  'dates[10][date]': '2023-04-24',
  'dates[11][day]': 'Sunday',
  'dates[11][duration]': '0.75',
  'dates[11][time]': '12:00',
  'dates[11][number]': '7',
  'dates[11][date]': '2023-04-23',
  'dates[12][day]': 'Monday',
  'dates[12][duration]': '1',
  'dates[12][time]': '12:00',
  'dates[12][number]': '1',
  'dates[12][date]': '2023-05-01',
  'dates[13][day]': 'Sunday',
  'dates[13][duration]': '0.75',
  'dates[13][time]': '12:00',
  'dates[13][number]': '7',
  'dates[13][date]': '2023-04-30',
  'dates[14][day]': 'Monday',
  'dates[14][duration]': '1',
  'dates[14][time]': '12:00',
  'dates[14][number]': '1',
  'dates[14][date]': '2023-05-08',
  'dates[15][day]': 'Sunday',
  'dates[15][duration]': '0.75',
  'dates[15][time]': '12:00',
  'dates[15][number]': '7',
  'dates[15][date]': '2023-05-07',
  'dates[16][day]': 'Monday',
  'dates[16][duration]': '1',
  'dates[16][time]': '12:00',
  'dates[16][number]': '1',
  'dates[16][date]': '2023-05-15',
  'dates[17][day]': 'Sunday',
  'dates[17][duration]': '0.75',
  'dates[17][time]': '12:00',
  'dates[17][number]': '7',
  'dates[17][date]': '2023-05-14',
  'dates[18][day]': 'Monday',
  'dates[18][duration]': '1',
  'dates[18][time]': '12:00',
  'dates[18][number]': '1',
  'dates[18][date]': '2023-05-22',
  'dates[19][day]': 'Sunday',
  'dates[19][duration]': '0.75',
  'dates[19][time]': '12:00',
  'dates[19][number]': '7',
  'dates[19][date]': '2023-05-21',
  'dates[20][day]': 'Monday',
  'dates[20][duration]': '1',
  'dates[20][time]': '12:00',
  'dates[20][number]': '1',
  'dates[20][date]': '2023-05-29',
  'dates[21][day]': 'Sunday',
  'dates[21][duration]': '0.75',
  'dates[21][time]': '12:00',
  'dates[21][number]': '7',
  'dates[21][date]': '2023-05-28',
  'dates[22][day]': 'Monday',
  'dates[22][duration]': '1',
  'dates[22][time]': '12:00',
  'dates[22][number]': '1',
  'dates[22][date]': '2023-06-05'
}





{

"dates":[
    {
        "day": "Monday",
        "duration": 1,
        "time": "12:00",
        "number": 1,
        "date": "2023-03-20"
    },
    {
        "day": "Sunday",
        "duration": 0.75,
        "time": "12:00",
        "number": 7,
        "date": "2023-03-19"
    },
    {
        "day": "Monday",
        "duration": 1,
        "time": "12:00",
        "number": 1,
        "date": "2023-03-27"
    },
    {
        "day": "Sunday",
        "duration": 0.75,
        "time": "12:00",
        "number": 7,
        "date": "2023-03-26"
    },
    {
        "day": "Monday",
        "duration": 1,
        "time": "12:00",
        "number": 1,
        "date": "2023-04-03"
    },
    {
        "day": "Sunday",
        "duration": 0.75,
        "time": "12:00",
        "number": 7,
        "date": "2023-04-02"
    },
    {
        "day": "Monday",
        "duration": 1,
        "time": "12:00",
        "number": 1,
        "date": "2023-04-10"
    },
    {
        "day": "Sunday",
        "duration": 0.75,
        "time": "12:00",
        "number": 7,
        "date": "2023-04-09"
    },
    {
        "day": "Monday",
        "duration": 1,
        "time": "12:00",
        "number": 1,
        "date": "2023-04-17"
    },
    {
        "day": "Sunday",
        "duration": 0.75,
        "time": "12:00",
        "number": 7,
        "date": "2023-04-16"
    },
    {
        "day": "Monday",
        "duration": 1,
        "time": "12:00",
        "number": 1,
        "date": "2023-04-24"
    },
    {
        "day": "Sunday",
        "duration": 0.75,
        "time": "12:00",
        "number": 7,
        "date": "2023-04-23"
    },
    {
        "day": "Monday",
        "duration": 1,
        "time": "12:00",
        "number": 1,
        "date": "2023-05-01"
    },
    {
        "day": "Sunday",
        "duration": 0.75,
        "time": "12:00",
        "number": 7,
        "date": "2023-04-30"
    },
    {
        "day": "Monday",
        "duration": 1,
        "time": "12:00",
        "number": 1,
        "date": "2023-05-08"
    },
    {
        "day": "Sunday",
        "duration": 0.75,
        "time": "12:00",
        "number": 7,
        "date": "2023-05-07"
    },
    {
        "day": "Monday",
        "duration": 1,
        "time": "12:00",
        "number": 1,
        "date": "2023-05-15"
    },
    {
        "day": "Sunday",
        "duration": 0.75,
        "time": "12:00",
        "number": 7,
        "date": "2023-05-14"
    },
    {
        "day": "Monday",
        "duration": 1,
        "time": "12:00",
        "number": 1,
        "date": "2023-05-22"
    },
    {
        "day": "Sunday",
        "duration": 0.75,
        "time": "12:00",
        "number": 7,
        "date": "2023-05-21"
    },
    {
        "day": "Monday",
        "duration": 1,
        "time": "12:00",
        "number": 1,
        "date": "2023-05-29"
    },
    {
        "day": "Sunday",
        "duration": 0.75,
        "time": "12:00",
        "number": 7,
        "date": "2023-05-28"
    },
    {
        "day": "Monday",
        "duration": 1,
        "time": "12:00",
        "number": 1,
        "date": "2023-06-05"
    }
]
    
}

*/ 