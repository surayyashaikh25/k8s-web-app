#!/usr/bin/python3

import cgi
import subprocess

print("content-type: text/html")
print()

f = cgi.FieldStorage()
contName = f.getvalue("contName")

cmd = "sudo docker stop {0}".format(contName)
runCmd = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
(output, err) = runCmd.communicate()
exitCode = runCmd.wait()

if exitCode == 0:
    print("Container Stopped :)")
    print("Name of the Container is : ",output.decode())
else:
    print("some error occured... The container isn't stopped... :(")
