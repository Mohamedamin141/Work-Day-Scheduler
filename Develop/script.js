
var currentDay= dayjs();
var saveBtn =  $(".saveBtn");
var eghtAm= $("#hour-8");
 var nineAm= $("#hour-9");
 var tenAm= $("#hour-10");
 var evlAm= $("#hour-11");
var twPm= $("#hour-12");
 var threPm= $("#hour-13");
 var fourtPm= $("#hour-14");
 var fivtPm= $("#hour-15");
 var sixtPm= $("#hour-16");
 var sevtPm= $("#hour-17");
 
// it shows the current day
$("#currentDay").text(currentDay.format("dddd DD, MMMM  "));


$(function  () {
  
  // document.ready waits until page is loaded 
  $(document).ready(function() {
  
    saveBtn.each(function(){
      let timeBlock = $(this).parent();
      let id = timeBlock.attr("id");
      
      // Retrieve saved data from localStorage and set it as the value of the description
      let savedDescription = localStorage.getItem(id);
      if (savedDescription) {
        timeBlock.find('.description').val(savedDescription);
      }
  
      $(this).on("click", function(){
        let inputDescription = timeBlock.find('.description').val();
        localStorage.setItem(id , inputDescription);
      });
    });
  });
  

  })

   


  var currentHour = dayjs().hour();



 // updates background color based on time of day!.

  function updateTime(time,element){
    
    if (currentHour === time){
      element.removeClass("past present future").addClass('present');
    }
    else if (currentHour > time){
      element.removeClass("past present future").addClass("past");
    }
    else if (currentHour < time){
      element.removeClass("past present future").addClass("future");
      console.log(currentHour)
    }


  }
    // calls in each  time function.  
  updateTime(9,nineAm);
  updateTime(10,tenAm);
  updateTime(11,evlAm);
  updateTime(12,twPm);

  updateTime(13,threPm);
  updateTime(14,fourtPm);
  updateTime(15,fivtPm);
  updateTime(16,sixtPm);
  updateTime(17,sevtPm);


