#!/usr/bin/python3

import cgi
import subprocess

print("content-type:text/html")
print()

# Delete all Kubernetes Resources
del_all = subprocess.getstatusoutput("sudo kubectl delete all --all")
if del_all[0]==0:
    print(del_all[1])
    print("All resources are deleted successfully.....\n\n")
else:
    print(del_all[1])
    print("something went wrong!")

