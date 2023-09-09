function padNumber(number) {
    return number < 10 ? '0' + number : number;
}

function displaytime(){

    var session = "";
    var month = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var today = new Date();
    var day = today.getUTCDay();
    
    var time = padNumber(today.getUTCHours()) + ":" + padNumber(today.getUTCMinutes()) + ":" + padNumber(today.getUTCSeconds()) + ":" + padNumber(today.getUTCMilliseconds()) ;

    if (today.getUTCHours() >= 12){
        session = "PM";
    }else {
        session = "AM";
    }

   
    
    document.getElementById("currentDayOfTheWeek").innerHTML = daylist[day]
    
    document.getElementById("currentUTCTime").innerHTML = time + " " + session ; 

}




setInterval(displaytime, 10);

