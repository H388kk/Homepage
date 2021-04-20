console.log("Skripts stradā!");

document.getElementById("bobaBo").addEventListener("click", pogaStrada);

function pogaStrada() {
    console.log("Poga stradā");
    let popUp = document.getElementById("popUp");
    popUp.style.display = "block"
}