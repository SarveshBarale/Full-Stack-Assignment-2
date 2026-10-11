// 1. Form submit message
var form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading
  var name = document.getElementById("name").value;
  document.getElementById("formMessage").innerHTML = "Thank you " + name + ", the form is submitted.";
});


// 2. Canvas drawing
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// blue rectangle
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 100, 70);

// orange circle
ctx.fillStyle = "orange";
ctx.beginPath();
ctx.arc(180, 55, 40, 0, 2 * Math.PI);
ctx.fill();


// 3. Local storage
var saveBtn = document.getElementById("saveBtn");
var noteBox = document.getElementById("note");
var noteMessage = document.getElementById("noteMessage");

// show the old note if there is one
var oldNote = localStorage.getItem("myNote");
if (oldNote) {
  noteMessage.innerHTML = "Saved note: " + oldNote;
}

saveBtn.onclick = function () {
  localStorage.setItem("myNote", noteBox.value);
  noteMessage.innerHTML = "Saved note: " + noteBox.value;
};
