function createContVal() {
    var contName = document.getElementById('c1').value;
    var contImg = document.getElementById('c2').value;
    var d =  document.getElementById('cb1').checked;
    var i =  document.getElementById('cb2').checked;
    var t =  document.getElementById('cb3').checked;

    if (d && t) {
        if (i) {
            value="dit";            
        } else {
            value="dt"
        }
        
    } else if (d && i) {
            value="di";    
    }
    else if(i && t){
        value="it";
    }
    else if(d && !i && !t){
        value="d";
    }
    else if(!d && i && !t){
        value="i";
    }
    else if(!d && !i && t){
        value="t";
    }

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.43.14/cgi-bin/JSDockerWebsite/py-docker-create-backend.py?contName="+contName+"&contImg="+contImg+"&opt="+value, false);
    xhr.send();

    var op = xhr.responseText;
    alert(op);

    var xhr1 = new XMLHttpRequest();

    xhr1.open("GET", "http://192.168.1.2/cgi-bin/JSDockerWebsite/py-docker-countcont.py", false);
    xhr1.send();
	
    dockerPos = parseInt(document.getElementById('docker0').style.left, 10);
i = dockerPos;
	console.log(i);
    var count = xhr1.responseText;	    
    console.log(count);
	   if(dockerPos == 1380){
	   dockerPos = dockerPos - 100 - 145*(count-1);
	   }
	    else{
		    console.log(count);
		    dockerPos = 1280 - 145*(count-1);
	    }
	    moveDocker();

console.log(dockerPos);
function moveDocker(){
document.getElementById('docker0').style.left = i;
if(i>dockerPos){
	i--;
  
	setTimeout(moveDocker, 5);
}
   }
}
