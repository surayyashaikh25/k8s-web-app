function stopContVal() {
    var contName = document.getElementById('c3').value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.43.14/cgi-bin/JSDockerWebsite/py-docker-stop.py?contName="+contName, true);
    xhr.send();

    xhr.onload = function(){
        var op = xhr.responseText;
        alert(op);
    }
}
