
const display = document.getElementById('display');
function key(a)
{
    display.value+=a;
    
  
}
function clearDISPLAY()
{
    display.value = "" ;
}
function cal(){
    display.value = eval(display.value);
}
