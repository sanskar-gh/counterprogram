const decreasebtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");
const increasebtn = document.getElementById("increase");
const countlabel = document.getElementById("mynum");

let count = 0;

decreasebtn.onclick = () => {
   count--;
   countlabel.textContent = count;
}
increasebtn.onclick = () => {
   count++;
   countlabel.textContent = count;
}
resetbtn.onclick = () => {
   count = 0;
   countlabel.textContent = count;
}
