





var searchTerm = document.getElementById("searchTerm");


var searchButton = document.getElementById("searchButton");


searchButton.addEventListener("click", onClickSearhButton);


  
function onClickSearhButton() {


  var searchValue = searchTerm.value;



var searchesDiv = document.getElementById("searches");





  var newSearchItem = document.createElement("li");


  

    newSearchItem.textContent = searchValue;


  searchesDiv.appendChild(newSearchItem);
}