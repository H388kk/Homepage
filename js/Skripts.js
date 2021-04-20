console.log("Skripts stradā!");

document.getElementById("bobaBo").addEventListener("click", pogaStrada);
let bibliotec = []

function pogaStrada() {
    console.log("Poga stradā");
    let popUp = document.getElementById("popUp");
    popUp.style.display = "block"
}

document.getElementById("jaunsProdukts").addEventListener("click", jaunsProdukts);

function jaunsProdukts() {
    console.log("Pievienot Produktu")

    let popUp = document.getElementById("popUp");
    popUp.style.display = "none"

    let produkts = {produktaValue: produktaVards.value}

    bibliotec.push(produkts)
    console.log(bibliotec);

}