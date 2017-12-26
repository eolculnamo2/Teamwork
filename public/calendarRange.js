var monthObject = {
  0: 31,
  1: 28,
  2: 31,
  3: 30,
  4: 31,
  5: 30,
  6: 31,
  7: 31,
  8: 30,
  9: 31,
  10: 30,
  11: 31
}
var weekObject = {}
var date = new Date();
var today = date.getDate();
var weekday = date.getDay();
var year = date.getFullYear();
var month = date.getMonth();
var daysInMonth = monthObject[month];

var sunday = today-weekday;
var saturday = today + (6-weekday)
var sunMonth= month;
var satMonth = month;


if(saturday > daysInMonth){
 saturday = saturday - daysInMonth;
 satMonth > 0 ? satMonth = satMonth++ : satMonth = 11;
}

if(sunday <= 0){
  month-1 >= 0 ? sunMonth = sunMonth-- : sunMonth = 11;
  sunday = monthObject[sunMonth]+sunday; 
}

var dayArray=[];
 var x =1;
for(var i=0; i<7; i++){
 
  if(sunday+i>monthObject[sunMonth]){
    dayArray.push(x);
    x=x+1;
  }
  else{
 dayArray.push(sunday+i);
  }
}
var dateRange = {
  start: [sunday, sunMonth],
  end: [saturday, satMonth],
  days: dayArray
}


function nextWeek(){ 
//will jump to next week;
}
function lastWeek(){
// will go back one week;
}