// JavaScript File

//Gets the elements by using the Id's in the HTML file
var todo = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem'),
    dropdown= document.getElementById("dropdown");


//When user hits submit, the function displays the text at the bottom and adds style to it 
//according to user selection (bold, underline, etc.).
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  
  if (dropdown.value == "underline"){
    todo.innerHTML += '<div style= "text-decoration: underline;">' + text + '</div>';
  }
  else if (dropdown.value == "bold"){
    todo.innerHTML += '<div style= "font-weight: bold;">' + text + '</div>';
  }
  else if (dropdown.value == "blue"){
    todo.innerHTML += '<div style= "color: steelblue;">' + text + '</div>';

  }
  else if (dropdown.value == "italics"){
    todo.innerHTML += '<div style= "font-style: italic;">' + text + '</div>';
  }
  else if (dropdown.value == "none"){
    todo.innerHTML += '<div>' + text + '</div>'
  }
  
  evt.preventDefault();
}, false);


//This allows the user to click an item to cross it out and to delete it by clicking it again.
todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;

  
  if(tar.style.textDecoration === "line-through"){
    tar.parentNode.removeChild(tar);
  }
  else{
    tar.style.textDecoration = "line-through";
  }

  evt.preventDefault();
}, false);


