function docker() {
	var i = document.getElementById("input1").value
	var xhr = new XMLHttpRequest();
	xhr.open("GET","http://192.168.43.14/cgi-bin/JSDockerWebsite/dockerprompt.py?x=" + i,true);
	xhr.send();
	xhr.onload = function() {
		var output = xhr.responseText;
		document.getElementById("para").innerHTML = "[root@localhost ~]# " + i + '\n' + output;
	}
	document.getElementById("input1").value = "";
	}
	function autoType(){
	document.getElementById("para").innerHTML = "[root@localhost ~]# " + document.getElementById("input1").value;
	}
