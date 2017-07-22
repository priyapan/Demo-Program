var tm;
var nameday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementsByClassName("main").innerHTML = nameday[dt.getDay()];
console.log("Today is " + nameday[dt.getDay()]);

var strdate = dt.getHours();
if(strdate>=12){
       tm="PM";
      strdate = strdate-12;
        if(strdate==0 && dt.getMinutes()==00 && dt.getSeconds==00){
        tm="midnight";
        }
        else if(strdate==12 && dt.getMinutes()==00 && dt.getSeconds==00){
         tm="noon";
      }
}
else{tm="AM";}

strdate =strdate+" "+tm+ ":" + dt.getMinutes() +":"+dt.getSeconds();
console.log(strdate);