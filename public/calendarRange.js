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
var dayArray=[];
var dateRange = {
  start: [sunday, sunMonth+1],
  end: [saturday, satMonth+1],
  days: dayArray
}
function calculateDayRange(sun,sat){
  sunday = sun;
  saturday = sat;
  
  //The following four if statements adjust for days if they go below 0 or above the 
  //max days in month;
if(saturday > daysInMonth){
 saturday = saturday - daysInMonth;
 satMonth >= 0 ? satMonth = satMonth++ : satMonth = 11;
}

  if(sunday > daysInMonth){
 sunday = sunday - daysInMonth;
 sunday >= 0 ? sunMonth = sunMonth++ : sunMonth = 11;
}
  if(saturday <= 0){
  month-1 >= 0 ? satMonth = satMonth-- : satMonth = 11;
  saturday = monthObject[satMonth]+saturday; 
}
  
if(sunday <= 0){
  month-1 >= 0 ? sunMonth = sunMonth-- : sunMonth = 11;
  sunday = monthObject[sunMonth]+sunday; 
}


  // The alert above shows that the Sunday is updating to correct day
  // problem is in dayRange array which keeps giving same numbers.
 var x =1;
  dayArray=[];
for(var i=0; i<7; i++){
 
  if(sunday+i>monthObject[sunMonth]){
    dayArray.push(x);
    x=x+1;
  }
  else{
 dayArray.push(sunday+i);
  }
}
   dateRange = {
  start: [sunday, sunMonth+1],
  end: [saturday, satMonth+1],
  days: dayArray
}
  return dateRange;
}
//< Ends calculateDayRange function

calculateDayRange(sunday,saturday);

//return dateRange;


function nextWeek(){ 
  saturday = saturday+7;
  sunday = sunday+7;
  dateRange.days = [];
 
  calculateDayRange(sunday,saturday);
        
  dateRange = {
  start: [sunday, sunMonth+1],
  end: [saturday, satMonth+1],
  days: dayArray
  }
}
function lastWeek(){
   saturday = saturday-7;
  sunday = sunday-7;
  dateRange.days = [];
 
  calculateDayRange(sunday,saturday);
        
  dateRange = {
  start: [sunday, sunMonth+1],
  end: [saturday, satMonth+1],
  days: dayArray
  }
}