function addtask (){
    let taskinput= document.getElementById("task");
    let taskvalue= taskinput.value;
    if (taskvalue === ""){
        alert("enter your task");
        return;
    }
    let li= document.createElement("li");
    li.innerHTML=taskvalue+ `<button onclick="deletetask(this)">Delete</button>`
    document.getElementById("tasklist").appendChild(li);
    taskinput.value = "";
}
 
function deletetask(button){
    button.parentElement.remove();
}