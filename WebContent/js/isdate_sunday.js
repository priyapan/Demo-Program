var j=2014;
while(j<=2050){
var jr =j+" 01 01";
var d = new Date(jr);
var day = d.getDay();
var arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var isSunday = arr[day];
      if(isSunday == "Sunday"){
      console.log(j);
      }
      j++;
      console.log("true");
}
