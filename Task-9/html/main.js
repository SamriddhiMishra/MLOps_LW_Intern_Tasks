var cmd = "";

function run()
{
	var xhr = new XMLHttpRequest();
	console.log(cmd);
	xhr.open("GET", "http://192.168.56.120/cgi-bin/k8s.py?command="+cmd, true);
	xhr.send();

	xhr.onload = function() {
			            var output = xhr.responseText;
			            document.getElementById("output").innerHTML = output;
			        }
       cmd = "";
}


function task()
{
var task = document.getElementById("command").value;
if (task.includes("delete")){
  var rs_type = prompt("Enter the Resource Type or All:- ");
  if (rs_type.includes("all")){
    cmd = `sudo kubectl delete all --all --kubeconfig admin.conf`;
    }
  else{
//    var rs_type = prompt("Enter the Resource Type:- ");
    var rs_name = prompt("Enter the Resource Name:- ");
    cmd = `sudo kubectl delete ${rs_type} ${rs_name} --kubeconfig admin.conf`;
    }
}
else if (task.includes("expose")  || task.includes("service") ){
  if (task.includes("deployment")){
    var dep_name = prompt("Enter the Deployment Name:- ");
    var port = prompt("Enter the Port Number of Pod to be exposed:- ");
    var type = prompt("Enter the service type:- ");
    cmd = `sudo kubectl expose deployment ${dep_name} --port=${port} --type=${type} --kubeconfig admin.conf`;
    }
  else if (task.includes("pod")){
    var os_name = prompt("Enter the Pod Name:- ");
    var port = prompt("Enter the Port Number of Pod to be exposed:- ");
    var type = prompt("Enter the service type:- ");
    cmd = `sudo kubectl expose pod ${os_name} --port=${port} --type=${type} --kubeconfig admin.conf`;
    }
 else if (task.includes("show")){
    cmd = `sudo kubectl get svc --kubeconfig admin.conf`;
    }
}
else if (task.includes("pod")){
  if (task.includes("launch") || task.includes("run") || task.includes("create")){
    var img_name = prompt("Enter the Image Name:- ");
    var os_name = prompt("Enter the Pod Name:- ");
    cmd = `sudo kubectl run ${os_name} --image=${img_name} --kubeconfig admin.conf`;
    }
  else if (task.includes("view") || task.includes("details") || task.includes("get") || task.includes("show")){
    cmd = `sudo kubectl get pods --kubeconfig admin.conf`;
    }
}
else if (task.includes("deployment")){
  if (task.includes("launch") || task.includes("run") || task.includes("create")){
    var img_name = prompt("Enter the Image Name:- ");
    var dep_name = prompt("Enter the Deployment Name:- ");
    cmd = `sudo kubectl create deployment ${dep_name} --image=${img_name} --kubeconfig admin.conf`;
    }
  else if (task.includes("view") || task.includes("details") || task.includes("get")  || task.includes("show")){
    cmd = `sudo kubectl get deployment --kubeconfig admin.conf`;
    }
}
else if (task.includes("replica") || task.includes("scale")){
  var dep_name = prompt("Enter the Deployment Name:- ");
  var replicas = prompt("Enter the Number of Replicas:- ");
  cmd = `sudo kubectl scale deployment ${dep_name} --replicas=${replicas} --kubeconfig admin.conf`;
    }
}
