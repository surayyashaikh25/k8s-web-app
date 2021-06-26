#!/usr/bin/python3

import cgi
import subprocess

print("content-type:text/html\r\n")
print()

f = cgi.FieldStorage()

# Delete Pods
del_pod_name = f.getvalue("del_podname")

del_pod =  subprocess.getstatusoutput('sudo kubectl delete po ' + del_pod_name)
if del_pod[0]==0:
    print(del_pod[1])
    print("\n\nPod {} Deleted Successfully ...... \n\n".format(del_pod_name))
else:
    print(del_pod[1])
