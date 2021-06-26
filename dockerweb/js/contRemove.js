function removeContVal() {
    var contName = document.getElementById('c4').value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.43.14/cgi-bin/JSDockerWebsite/py-docker-remove.py?contName="+contName, false);
    xhr.send();

    
        var op = xhr.responseText;
        alert(op);
    
var xhr1 = new XMLHttpRequest();

	    xhr1.open("GET", "http://192.168.43.14/cgi-bin/JSDockerWebsite/py-docker-countcont.py", false);
	    xhr1.send();

	    dockerPos = parseInt(document.getElementById('docker0').style.left, 10);
	i = dockerPos;
	        console.log(i);
	    var count = xhr1.responseText;
	    console.log(count);
	           if(dockerPos == 1280 && count == 0){
			              dockerPos = dockerPos + 100;
			              }
	else if(dockerPos == 1380 && count > 0){
		dockerPos = 1280 - 145*(count);
dockerPos = dockerPos + 145;

	}
	else if(dockerPos == 1380 && count == 0){
	console.log("no movement");
	}
	            else{
			                        console.log(count);
			    dockerPos = 1280 - 145*(count);
			                        dockerPos = dockerPos + 145;
			                }
	            moveDocker();

	console.log(dockerPos);
	function moveDocker(){
		document.getElementById('docker0').style.left = i;
		if(i<dockerPos){
			        i++;

			        setTimeout(moveDocker, 5);
		}
		else if(i == dockerPos){
			console.log("stay");
		}
		else{
			i--;
			setTimeout(moveDocker, 5);
		}
		   }
}

