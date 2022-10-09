var m=0;
var y=0;
function Start(){
    y = setInterval(run,100);
    function run(){
        if(m==1160){
            clearInterval(y);
            m=0;
        }
        else{
            var x = document.getElementById("img");
            m+=10;
            x.style.marginLeft = m+'px';
        }
    }
}
function Stop(){
    clearInterval(y);
}