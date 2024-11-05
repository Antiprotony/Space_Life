let inventory = [];

// Funzione per cambiare scena e visualizzare oggetti unici per ogni scena
function changeScene(scene) {
    const sceneBg = document.getElementById("scene-bg");
    const dialogueText = document.getElementById("dialogue-text");
    const objectSample = document.getElementById("object-sample");
    const objectScanner = document.getElementById("object-scanner");

    // Nascondi oggetti di default
    objectSample.style.display = 'none';
    objectScanner.style.display = 'none';

    // Rimuovi eventuali altri simboli aggiunti
    objectSample.textContent = '';
    objectScanner.textContent = '';

    if (scene === 'planet') {
        sceneBg.src = 'images/alien_planet.png';
        dialogueText.textContent = 'Sei atterrato sul pianeta alieno. Cerca tracce di vita e indizi!';

        // Oggetti specifici per il pianeta
        objectSample.style.display = 'block';
        objectSample.textContent = '🪐'; // Minerale Luminescente
        randomizePosition(objectSample);
        objectSample.onclick = function() { pickUpItem('Minerale Luminescente'); };

        objectScanner.style.display = 'block';
        objectScanner.textContent = '🌱'; // Campione di Spora Straniera
        randomizePosition(objectScanner);
        objectScanner.onclick = function() { pickUpItem('Campione di Spora Straniera'); };

    } else if (scene === 'cave') {
        sceneBg.src = 'images/cave.png';
        dialogueText.textContent = 'Hai trovato una caverna misteriosa! Potrebbero esserci tracce di antichi organismi.';

        objectSample.style.display = 'block';
        objectSample.textContent = '🔮'; // Cristallo Alieno
        randomizePosition(objectSample);
        objectSample.onclick = function() { pickUpItem('Cristallo Alieno'); };

        objectScanner.style.display = 'block';
        objectScanner.textContent = '☠️'; // Ossa Fossilizzate
        randomizePosition(objectScanner);
        objectScanner.onclick = function() { pickUpItem('Ossa Fossilizzate'); };

    } else if (scene === 'structure') {
        sceneBg.src = 'images/ancient_structure.png';
        dialogueText.textContent = 'Ti trovi davanti a una struttura aliena. Prova a decifrare i simboli e cerca artefatti!';

        objectSample.style.display = 'block';
        objectSample.textContent = '📜'; // Pezzo di Codice Antico
        randomizePosition(objectSample);
        objectSample.onclick = function() { pickUpItem('Pezzo di Codice Antico'); };

        objectScanner.style.display = 'block';
        objectScanner.textContent = '💎'; // Cristallo Magnetico
        randomizePosition(objectScanner);
        objectScanner.onclick = function() { pickUpItem('Cristallo Magnetico'); };

    } else {
        sceneBg.src = 'images/laboratory.png';
        dialogueText.textContent = 'Sei tornato al laboratorio spaziale. Raccogli i tuoi strumenti per iniziare l’esplorazione!';

        objectSample.style.display = 'block';
        objectSample.textContent = '🔬'; // Microscopio Portatile
        randomizePosition(objectSample);
        objectSample.onclick = function() { pickUpItem('Microscopio Portatile'); };

        objectScanner.style.display = 'block';
        objectScanner.textContent = '🗝️'; // Chiave del Teletrasporto
        randomizePosition(objectScanner);
        objectScanner.onclick = function() { pickUpItem('Chiave del Teletrasporto'); };
    }
}

function randomizePosition(object) {
    const container = document.getElementById("scene");
    const maxX = container.clientWidth - 50;
    const maxY = container.clientHeight - 50;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    object.style.left = `${randomX}px`;
    object.style.top = `${randomY}px`;
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
