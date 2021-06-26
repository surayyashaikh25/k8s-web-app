#!/usr/bin/python3

import cgi
import subprocess

print("content-type:text/html\r\n")
print()

f = cgi.FieldStorage()

# Delete Deployments
del_deploy_name = f.getvalue("del_deployname")

del_deploy =  subprocess.getstatusoutput('sudo kubectl delete deployment  ' + del_deploy_name)
if del_deploy[0]==0:
    print(del_deploy)
    print("\n\nDeployment {} Deleted Successfully ... \n\n".format(del_deploy_name))
else:
    print(del_deploy[1])
