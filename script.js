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
    newTaskItem.textContent = taskText;
    taskList.appendChild(newTaskItem);
  }
}

