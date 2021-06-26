#!/usr/bin/python3

import cgi
import subprocess

print("content-type: text/html")
print()

f = cgi.FieldStorage()
contName = f.getvalue("contName")
contImg = f.getvalue("contImg")
opt = f.getvalue("opt")

cmd = "sudo docker run -{0} --name {1} {2}".format(opt,contName,contImg)
runCmd = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
(output, err) = runCmd.communicate()
exitCode = runCmd.wait()

if exitCode == 0:
    print("Container Launched :)")
    print("ID of the Container is : ",output.decode())
else:
    print("some error occured... The container isn't launched... :(")
