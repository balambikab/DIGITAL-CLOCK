const hrel=document.getElementById("Hour");
const minel=document.getElementById("Minutes");
const secel=document.getElementById("Seconds");
const ampmel=document.getElementById("ampm");
function updclk(){
  let h=new Date().getHours();
  let m=new Date().getMinutes();
  let s=new Date().getSeconds();
  ampm="AM"

  if(h>12){
   h=h-12;
   ampm="PM";
  }
  h=h<10?"0"+h:h;
  m=m<10?"0"+m:m;
  s=s<10?"0"+s:s;

  hrel.innerText=h;
  minel.innerText=m;
  secel.innerText=s;
  ampmel.innerText = ampm;
  setTimeout(()=>{
updclk();
  },1000)
}
updclk();
