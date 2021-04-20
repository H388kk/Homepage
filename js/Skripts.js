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
    produktaVards.value = "";

    bibliotec.push(produkts)
    render();

}

function render() {
    let biblioteka = document.getElementById('biblioteka')
    biblioteka.innerHTML = "";

    for(let i = 0; i < bibliotec.length; i++) {
        let biblioteka = `
        <div class="bibliotec">
            <h5>Produkta nosaukums: ${bibliotec[i].produktaVards}</h5>
        </div>`;
        biblioteka.innerHTML += bibliotec;
        
    }

    localStorage.setItem("bibliotec", JSON.stringify(bibliotec))
}