
/*menu list*/
$(".openNav").on('click',function () {
    
    $("#leftMenu").animate({ width: 200,  }, 100);
    $("#home-content").animate({ marginLeft: 300 }, 100);
  });
  
  $(".closebtn").on('click',function () {
    $("#leftMenu").animate({ width: 0 }, 100);
    $("#home-content").animate({ marginLeft: 0 }, 100);
  });
  

  /*menu */
  $("#leftMenu a").on('click',function (e) {

    var currentSection = $(e.target).attr("href");   // current section
    var positionSection = $(currentSection).offset().top;    // position
    $("body, html").animate({ scrollTop: positionSection }, 1500);
  });
  

  
  /*second section*/
  $("#sliderDown .toggle").on('click',function (e) {
    $(".inner").not($(e.target).next()).slideUp(400);
    $(e.target).next().slideToggle(400);
  });
  
  /*counter number*/

  $(function(){
    countTime("3 mars 2023 9:56:00");
  })
  
  function countTime(toCount) {
    let futureDate = new Date(toCount);
    futureDate = futureDate.getTime() / 1000;
  
    let dateNow = new Date();
    dateNow = dateNow.getTime() / 1000;
  
    betweenTime = futureDate - dateNow;
  
    let days = Math.floor(betweenTime / (24 * 60 * 60));
    let hours = Math.floor((betweenTime - days * (24 * 60 * 60)) / 3600);
    let mins = Math.floor(
      (betweenTime - days * (24 * 60 * 60) - hours * 3600) / 60
    );
    let scond = Math.floor(
      betweenTime - days * (24 * 60 * 60) - hours * 3600 - mins * 60
    );
  
    $(".days").html(`${days} d`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $(".seconds").html(`${scond} s`);
  
    setInterval(function () {
      countTime(toCount);
    }, 1000);
  }
  