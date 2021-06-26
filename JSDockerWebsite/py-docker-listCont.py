#!/usr/bin/python3

import cgi
import subprocess

print("content-type: text/html")
print()

cmd = "sudo docker ps -a --format '{{.Names}} -- {{.Status}}'"
runCmd = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
(output, err) = runCmd.communicate()
exitCode = runCmd.wait()

if exitCode == 0:
    print("Running containers are : ")
    print(output.decode())
else:
    print("some error occured... :(")
