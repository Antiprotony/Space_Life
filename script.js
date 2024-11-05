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

    // Aggiorna la scena in base alla selezione e modifica gli oggetti
    if (scene === 'planet') {
        sceneBg.src = 'images/alien_planet.png';
        dialogueText.textContent = 'Sei atterrato sul pianeta alieno. Cerca indizi di vita.';

        // Oggetto speciale per il pianeta, con simbolo 🪐
        objectSample.style.display = 'block';
        objectSample.textContent = '🪐';
        randomizePosition(objectSample);
        objectSample.onclick = function() { pickUpItem('Minerale Raro'); };

    } else if (scene === 'cave') {
        sceneBg.src = 'images/cave.png';
        dialogueText.textContent = 'Hai trovato una caverna misteriosa. Potrebbero esserci tracce di antichi organismi.';

        // Oggetto speciale per la caverna, con simbolo 🔮
        objectSample.style.display = 'block';
        objectSample.textContent = '🔮';
        randomizePosition(objectSample);
        objectSample.onclick = function() { pickUpItem('Cristallo Alieno'); };

    } else if (scene === 'structure') {
        sceneBg.src = 'images/ancient_structure.png';
        dialogueText.textContent = 'Ti trovi davanti a una struttura aliena. Prova a decifrare i simboli.';

        // Oggetto speciale per la struttura antica, con simbolo 📜
        objectScanner.style.display = 'block';
        objectScanner.textContent = '📜';
        randomizePosition(objectScanner);
        objectScanner.onclick = function() { pickUpItem('Codice Antico'); };

    } else {
        // Torna alla scena del laboratorio
        sceneBg.src = 'images/laboratory.png';
        dialogueText.textContent = 'Sei tornato al laboratorio.';

        // Oggetti del laboratorio, con simboli 🔬 e 📡
        objectSample.style.display = 'block';
        objectSample.textContent = '🔬';
        randomizePosition(objectSample);
        objectSample.onclick = function() { pickUpItem('Campione Biologico'); };

        objectScanner.style.display = 'block';
        objectScanner.textContent = '📡';
        randomizePosition(objectScanner);
        objectScanner.onclick = function() { pickUpItem('Scanner Portatile'); };
    }
}

// Funzione per randomizzare la posizione degli oggetti
function randomizePosition(object) {
    const container = document.getElementById("scene");
    const maxX = container.clientWidth - 50; // Limite orizzontale
    const maxY = container.clientHeight - 50; // Limite verticale

    // Posizione randomica
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    object.style.left = `${randomX}px`;
    object.style.top = `${randomY}px`;
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
