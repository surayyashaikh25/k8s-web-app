function listImg() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.43.14/cgi-bin/JSDockerWebsite/py-docker-listimg.py", true);
    xhr.send();

    xhr.onload = function(){
        var op = xhr.responseText;
        alert(op);
    }
}
