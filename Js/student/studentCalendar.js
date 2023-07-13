document.addEventListener('DOMContentLoaded', function() {
    var Calendar = FullCalendar.Calendar;
    var Draggable = FullCalendar.Draggable;
  
    var containerEl = document.getElementById('external-events');
    var calendarEl = document.getElementById('calendar');
    var checkbox = document.getElementById('drop-remove');
  
    // initialize the external events
    // -----------------------------------------------------------------
  
   
    // initialize the calendar
    // -----------------------------------------------------------------
  
    var calendar = new Calendar(calendarEl, {
      
     themeSystem: 'bootstrap5',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    events: [
      {
        id: 'a',
        title: 'my event',
        start: '2023-01-22'
      }
    ],
      droppable: true, 
    });
  
    calendar.render();
  
  });
  jQuery(function(){
    $(".mCustomScrollbar2").mCustomScrollbar({
      axis: "y",
      autoHideScrollbar: true,
      scrollInertia: 0
      // horizontal scrollbar
  });
  
  })