// Do something when the whole DOM is loaded
addEventListener("DOMContentLoaded", (event) => {
  
  
});


function doStuff() {
  console.log("button!!!!!")
}
//helper JS function to call to redirect user back to home page! 
function returnBack() { 
  console.log("returnBack gets called!")
  window.location.href = "./index.html"; 
}

//function to help toggle between light and dark background 
function toggleBackgroundColor() {
  const root = document.getElementById("root"); 
  const obj = getComputedStyle(root); 
  console.log(obj["background-color"]);
}