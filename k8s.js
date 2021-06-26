var ip="54.144.153.78" ;
function listPod() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://"+ip+"/cgi-bin/listpod.py", true);
    xhr.send();

    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.responseText;
    }
}

function listDeploy() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://"+ip+"/cgi-bin/listdeploy.py", true);
    xhr.send();

    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.responseText;
    }
}

function listService() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://"+ip+"/cgi-bin/listsvc.py", true);
    xhr.send();

    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.responseText;
    }
}

function delAll() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://"+ip+"/cgi-bin/delall.py", true);
    xhr.send();

    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.responseText;
    }
}

function launchPod() {

    var i = document.getElementById("in1").value;
    var j = document.getElementById("in2").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", `http://`+ip+`/cgi-bin/launchpod.py?podname= ${i}&pimage=${j}`, true);
    xhr.send();

    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.responseText;
    }
}

function launchDeploy() {

    var k = document.getElementById("in3").value;
    var l = document.getElementById("in4").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", `http://`+ip+`/cgi-bin/launchdeploy.py?deployname= ${k}&dimage=${l}`, true);
    xhr.send();

    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.responseText;
    }
}

function delPod() {

    var m = document.getElementById("in5").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://"+ip+"/cgi-bin/delpod.py?del_podname=" + m, true);
    xhr.send();

    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.response;
    }
}

function delDeploy() {

    var n = document.getElementById("in6").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://"+ip+"/cgi-bin/deldeploy.py?del_deployname=" + n, true);
    xhr.send();

    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.response;
    }
}

function scaleReplica() {

    var o = document.getElementById("in7").value;
    var p = document.getElementById("in8").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", `http://`+ip+`/cgi-bin/scalereplica.py?deploy_name= ${o}&replicas=${p}`, true);
    xhr.send();

    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.responseText;
    }
}

function expose() {

    var q = document.getElementById("in6").value

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://"+ip+"/cgi-bin/expose.py?del_deployname=" + q, true);
    xhr.send();

    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.responseText;
    }
}
