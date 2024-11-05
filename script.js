let inventory = [];

function changeScene(scene) {
    const sceneBg = document.getElementById("scene-bg");
    const dialogueText = document.getElementById("dialogue-text");
    const objectSample = document.getElementById("object-sample");
    const objectScanner = document.getElementById("object-scanner");

    if (scene === 'planet') {
        sceneBg.src = 'images/alien_planet.jpg';
        dialogueText.textContent = 'Sei atterrato sul pianeta alieno. Cerca indizi di vita.';
        objectSample.style.display = 'none';
        objectScanner.style.display = 'none';
    } else if (scene === 'cave') {
        sceneBg.src = 'images/cave.jpg';
        dialogueText.textContent = 'Hai trovato una caverna misteriosa. Potrebbero esserci tracce di antichi organismi.';
        objectSample.style.display = 'block';
        objectSample.onclick = function() { pickUpItem('Cristallo Alieno'); };
        objectScanner.style.display = 'none';
    } else if (scene === 'structure') {
        sceneBg.src = 'images/ancient_structure.jpg';
        dialogueText.textContent = 'Ti trovi davanti a una struttura aliena. Prova a decifrare i simboli.';
        objectSample.style.display = 'none';
        objectScanner.style.display = 'block';
        objectScanner.onclick = function() { pickUpItem('Codice Antico'); };
    } else {
        sceneBg.src = 'images/laboratory.jpg';
        dialogueText.textContent = 'Sei tornato al laboratorio.';
        objectSample.style.display = 'block';
        objectScanner.style.display = 'block';
    }
}

function pickUpItem(item) {
    if (!inventory.includes(item)) {
        inventory.push(item);
        document.getElementById("dialogue-text").textContent = `Hai raccolto: ${item}`;
    } else {
        document.getElementById("dialogue-text").textContent = `Hai già raccolto questo oggetto.`;
    }
}

function viewInventory() {
    alert("Inventario: " + inventory.join(", "));
}
