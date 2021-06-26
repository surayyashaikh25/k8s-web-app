#!/usr/bin/python3

import cgi
import subprocess

print("content-type: text/html")
print()

cmd = "sudo docker images | awk '{print $1}'"
runCmd = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
(output, err) = runCmd.communicate()
exitCode = runCmd.wait()

if exitCode == 0:
    print("Images in the server are : ")
    print(output.decode())
else:
    print("some error occured... :(")
