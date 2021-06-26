#!/usr/bin/python3

import cgi
import subprocess

print("content-type: text/html")
print()

cmd = "sudo docker ps -a --format '{{.Names}}' | wc -l"
runCmd = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
(output, err) = runCmd.communicate()
exitCode = runCmd.wait()

print(output.decode())
