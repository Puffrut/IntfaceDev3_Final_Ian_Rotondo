document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();
  });

  $(document).ready(function(){
    $('#carousel').slick({
        prevArrow: null,
        nextArrow: null,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        infinite: true
    
        
      
    });
  });