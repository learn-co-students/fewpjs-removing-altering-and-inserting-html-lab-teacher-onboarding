// Write your code here!
const main = document.getElementById('main');
main.remove();
const newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");
document.body.appendChild(newHeader);
const header = document.getElementById("victory");
header.innerHTML = "YOUR-NAME is the champion";