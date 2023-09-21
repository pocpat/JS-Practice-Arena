function timeConversion(s) {
    // Write your code here
const timeArr = s.split(":");
let hours = parseInt(timeArr[0]);

if (hours<12 && s.includes("PM") ){
   hours+=12;

}
 else if (hours === 12&&s.includes("AM")){
   hours=0;
}
const militaryTime = hours.toString().padStart(2, '0')+ ":"+timeArr[1]+":"+timeArr[2].slice(0,2);
return militaryTime;
}
timeConversion("07:45:54PM")

// function add(s,d){
//     return s+d;

// }

// add(2,5);
