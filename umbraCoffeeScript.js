
function fridayStream(currentTime){
    var currentDay = currentTime.day();
    var currentHour = currentTime.hour();
    var currentMinute = currentTime.minute();

    if(currentDay === 5 && 
        ((currentHour === 11 && currentMinute >= 30) || 
        (currentHour === 12 && currentMinute <= 30)))
    {
        return true;
    }
    return false;
  }

  function codegardenStream(currentTime){
    var currentDate = moment().format("YYYY-MM-DD");

    var currentHour = currentTime.hour();
    var currentMinute = currentTime.minute();

    if(currentDate === "2023-06-14" &&
        ((currentHour === 20 && currentMinute >= 10) || 
        (currentHour === 20 && currentMinute <= 45))){
        return true
    }

    if(currentDate === "2023-06-15" &&
        ((currentHour === 15 && currentMinute >= 15) || 
        (currentHour === 15 && currentMinute <= 50))){
        return true
    }

    if(currentDate === "2023-06-16" &&
        ((currentHour === 12 && currentMinute >= 00) || 
        (currentHour === 12 && currentMinute <= 30))){
        return true
    }

    return false;
  }

  function updateElementVisibility() {
    var currentTime = moment().tz("Europe/London");

    var liveStatusYes = document.getElementById("liveStatusYes");
    var liveStatusNo = document.getElementById("liveStatusNo");

    if (fridayStream(currentTime) || codegardenStream(currentTime)) {
      liveStatusYes.classList.remove("hidden");
    } else {
      liveStatusNo.classList.remove("hidden");
    }
  }

  window.onload = updateElementVisibility;

  setInterval(updateElementVisibility, 60000);