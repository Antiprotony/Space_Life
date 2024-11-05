let inventory = [];

// Funzione per cambiare scena
function changeScene(scene) {
    const sceneBg = document.getElementById("scene-bg");
    const dialogueText = document.getElementById("dialogue-text");
    const objectSample = document.getElementById("object-sample");
    const objectScanner = document.getElementById("object-scanner");

    // Nascondi oggetti per evitare che siano visibili in tutte le scene
    objectSample.style.display = 'none';
    objectScanner.style.display = 'none';

    // Aggiorna la scena in base alla selezione
    if (scene === 'planet') {
        sceneBg.src = 'images/alien_planet.png';
        dialogueText.textContent = 'Sei atterrato sul pianeta alieno. Cerca indizi di vita.';
    } else if (scene === 'cave') {
        sceneBg.src = 'images/cave.png';
        dialogueText.textContent = 'Hai trovato una caverna misteriosa. Potrebbero esserci tracce di antichi organismi.';
        // Oggetto speciale nella caverna
        objectSample.style.display = 'block';
        objectSample.onclick = function() { pickUpItem('Cristallo Alieno'); };
        objectSample.style.top = '50%';
        objectSample.style.left = '60%';
    } else if (scene === 'structure') {
        sceneBg.src = 'images/ancient_structure.png';
        dialogueText.textContent = 'Ti trovi davanti a una struttura aliena. Prova a decifrare i simboli.';
        // Oggetto speciale nella struttura antica
        objectScanner.style.display = 'block';
        objectScanner.onclick = function() { pickUpItem('Codice Antico'); };
        objectScanner.style.top = '40%';
        objectScanner.style.left = '70%';
    } else {
        // Torna alla scena del laboratorio
        sceneBg.src = 'images/laboratory.png';
        dialogueText.textContent = 'Sei tornato al laboratorio.';
        objectSample.style.display = 'block';
        objectScanner.style.display = 'block';
        objectSample.onclick = function() { pickUpItem('Campione Biologico'); };
        objectSample.style.top = '50%';
        objectSample.style.left = '20%';
        objectScanner.onclick = function() { pickUpItem('Scanner Portatile'); };
        objectScanner.style.top = '50%';
        objectScanner.style.left = '70%';
    }
}

// Funzione per raccogliere oggetti
function pickUpItem(item) {
    if (!inventory.includes(item)) {
        inventory.push(item);
        document.getElementById("dialogue-text").textContent = `Hai raccolto: ${item}`;
    } else {
        document.getElementById("dialogue-text").textContent = `Hai già raccolto questo oggetto.`;
    }
}

// Funzione per visualizzare l’inventario
function viewInventory() {
    alert("Inventario: " + inventory.join(", "));
}
