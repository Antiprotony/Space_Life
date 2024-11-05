let inventory = [];
let puzzlesSolved = {};

// Funzione per avviare il gioco
function startGame() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    document.getElementById("dialogue-text").textContent = "Sei nel laboratorio. Raccogli gli strumenti per iniziare l'esplorazione.";
}

// Funzione per cambiare scena e visualizzare oggetti unici per ogni scena
function changeScene(scene) {
    const sceneBg = document.getElementById("scene-bg");
    const dialogueText = document.getElementById("dialogue-text");
    const objectSample = document.getElementById("object-sample");
    const objectScanner = document.getElementById("object-scanner");

    objectSample.style.display = 'none';
    objectScanner.style.display = 'none';

    if (scene === 'planet') {
        sceneBg.src = 'images/alien_planet.png';
        dialogueText.textContent = 'Sei atterrato sul pianeta alieno. Cerca tracce di vita e indizi!';
        objectSample.style.display = 'block';
        objectSample.textContent = '🪐';
        randomizePosition(objectSample);
        objectSample.onclick = function() { pickUpItem('Minerale Luminescente'); };

        objectScanner.style.display = 'block';
        objectScanner.textContent = '🌱';
        randomizePosition(objectScanner);
        objectScanner.onclick = function() { pickUpItem('Campione di Spora Straniera'); };

        checkPlanetPuzzle();

    } else if (scene === 'cave') {
        sceneBg.src = 'images/cave.png';
        dialogueText.textContent = 'Hai trovato una caverna misteriosa! Potrebbero esserci tracce di antichi organismi.';
        objectSample.style.display = 'block';
        objectSample.textContent = '🔮';
        randomizePosition(objectSample);
        objectSample.onclick = function() { pickUpItem('Cristallo Alieno'); };

        objectScanner.style.display = 'block';
        objectScanner.textContent = '☠️';
        randomizePosition(objectScanner);
        objectScanner.onclick = function() { pickUpItem('Ossa Fossilizzate'); };

        checkCavePuzzle();

    } else if (scene === 'structure') {
        sceneBg.src = 'images/ancient_structure.png';
        dialogueText.textContent = 'Ti trovi davanti a una struttura aliena. Prova a decifrare i simboli e cerca artefatti!';
        objectSample.style.display = 'block';
        objectSample.textContent = '📜';
        randomizePosition(objectSample);
        objectSample.onclick = function() { pickUpItem('Pezzo di Codice Antico'); };

        objectScanner.style.display = 'block';
        objectScanner.textContent = '💎';
        randomizePosition(objectScanner);
        objectScanner.onclick = function() { pickUpItem('Cristallo Magnetico'); };

        checkStructurePuzzle();

    } else {
        sceneBg.src = 'images/laboratory.png';
        dialogueText.textContent = 'Sei nel laboratorio spaziale. Raccogli gli strumenti per iniziare l’esplorazione!';
        objectSample.style.display = 'block';
        objectSample.textContent = '🔬';
        randomizePosition(objectSample);
        objectSample.onclick = function() { pickUpItem('Microscopio Portatile'); };

        objectScanner.style.display = 'block';
        objectScanner.textContent = '🗝️';
        randomizePosition(objectScanner);
        objectScanner.onclick = function() { pickUpItem('Chiave del Teletrasporto'); };

        checkLabPuzzle();
    }
}

function pickUpItem(item) {
    if (!inventory.includes(item)) {
        inventory.push(item);
        document.getElementById("dialogue-text").textContent = `Hai raccolto: ${item}`;
        checkPuzzles(item);
    } else {
        document.getElementById("dialogue-text").textContent = `Hai già raccolto questo oggetto.`;
    }
}

function viewInventory() {
    alert("Inventario: " + inventory.join(", "));
}

// Funzione per risolvere enigmi in base agli oggetti raccolti
function checkPuzzles(item) {
    if (item === 'Microscopio Portatile' && inventory.includes('Campione di Spora Straniera')) {
        document.getElementById("dialogue-text").textContent = "Hai attivato il portale per il pianeta alieno!";
        puzzlesSolved['LabPortal'] = true;
    } else if (item === 'Minerale Luminescente' && inventory.includes('Campione di Spora Straniera')) {
        document.getElementById("dialogue-text").textContent = "Hai combinato gli oggetti e trovato una Pergamena Aliena nascosta!";
        puzzlesSolved['PlanetScroll'] = true;
    } else if (item === 'Cristallo Alieno' && inventory.includes('Ossa Fossilizzate')) {
        document.getElementById("dialogue-text").textContent = "Hai usato le ossa per decifrare il codice e sbloccato una porta segreta!";
        puzzlesSolved['CaveDoor'] = true;
    } else if (item === 'Cristallo Magnetico' && inventory.includes('Pezzo di Codice Antico')) {
        document.getElementById("dialogue-text").textContent = "Hai completato il codice antico e decifrato il messaggio finale!";
        puzzlesSolved['FinalMessage'] = true;
    }
}

// Verifica degli enigmi risolti
function checkLabPuzzle() {
    if (puzzlesSolved['LabPortal']) {
        document.getElementById("dialogue-text").textContent = "Il portale è attivo! Vai al pianeta per esplorare.";
    }
}

function checkPlanetPuzzle() {
    if (puzzlesSolved['PlanetScroll']) {
        document.getElementById("dialogue-text").textContent = "Hai trovato una Pergamena Aliena con indizi per la struttura!";
    }
}

function checkCavePuzzle() {
    if (puzzlesSolved['CaveDoor']) {
        document.getElementById("dialogue-text").textContent = "La porta segreta nella caverna è ora aperta.";
    }
}

function checkStructurePuzzle() {
    if (puzzlesSolved['FinalMessage']) {
        document.getElementById("dialogue-text").textContent = "Hai decifrato il messaggio finale! Hai svelato il mistero di Gliese 581g.";
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
