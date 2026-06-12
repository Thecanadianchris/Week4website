var toDo = document.getElementById("toDo");


var saveNote = document.getElementById("savenote");


saveNote.addEventListener("click", onClickSaveNote);


  
function onClickSaveNote() {


  var taskText = toDo.value;


 if (taskText === "") {
    document.getElementById("voidentry").style.display = "block";
  } else {
    document.getElementById("voidentry").style.display = "none";
    var taskList = document.getElementById("taskList");
    var newTaskItem = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newTaskItem.appendChild(checkbox);
    var taskLabel = document.createTextNode(taskText);
    newTaskItem.appendChild(taskLabel);
    taskList.appendChild(newTaskItem);
    toDo.value = "";

  }














}

