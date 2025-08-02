// Lista de futbolistas
const footballers = [
    "Terminator", "Alien", "Blade Runner", "Dune", "Mad Max",  
"Rocky", "Rambo", "Tiburón", "ET", "Regreso al Futuro",  
"Indiana Jones", "Top Gun", "Misión Imposible", "James Bond", "John Wick",  
"Kill Bill", "Django Unchained", "El Gran Hotel Budapest", "El Club de la Pelea",  
"Los Miserables", "El Fantasma de la Ópera", "Moulin Rouge", "Chicago",  
"El Curioso Caso de Benjamin Button", "Slumdog Millionaire", "El Discurso del Rey",  
"La Forma del Agua", "Birdman", "Spotlight", "Moonlight", "Nomadland",  
"Drive", "Nightcrawler", "Prisoners", "Zodiac", "Seven",  
"El Irlandés", "Infiltrados", "Léon: El Profesional", "El Quinto Elemento",  
"Amadeus", "El Pianista", "La Lista de Schindler", "Salvando al Soldado Ryan",  
"Apocalipsis Now", "Platoon", "Nacido el 4 de Julio", "El Cazador",  
"Carlitos Way", "Heat", "Scarface", "Los Soprano", "Breaking Bad",  
"Game of Thrones", "Stranger Things", "The Crown", "Peaky Blinders",  
"Friends", "The Office", "Modern Family", "Two and a Half Men",  
"Pablo Echarri", "Natalia Oreiro", "Facundo Arana", "Carla Peterson",  
"Diego Peretti", "Mike Amigorena", "Luisana Lopilato", "Juanita Viale",  
"Florencia Peña", "Florencia Bertotti", "Julieta Díaz", "Nancy Dupláa",  
"Leonor Benedetto", "Andrea del Boca", "Grecia Colmenares", "Juan Darthés",  
"Federico Luppi", "Pepe Soriano", "Héctor Bidonde", "Arturo Puig",  
"Lito Cruz", "Antonio Gasalla", "Alberto Olmedo", "Carlos Balá",  
"Tato Bores", "Juan Carlos Altavista", "Mario Sapag", "Gerardo Romano",  
"Soledad Silveyra", "China Zorrilla", "Ana María Picchio", "Thelma Biral",  
"Alfredo Casero", "Enrique Pinti", "Alejandra Darín", "Muriel Santa Ana",  
"Valeria Bertuccelli", "Érica Rivas", "Lola Berthet", "Julieta Zylberberg",  
"Juan Palomino", "Esteban Lamothe", "Daniel Aráoz", "Osmar Núñez",  
"Diego Torres", "Sandro", "Palito Ortega", "Leo Dan",  
"Pimpinela", "Vilma Palma", "Los Auténticos Decadentes", "Los Pericos",  
"Los Fundamentalistas del Aire Acondicionado", "Las Pelotas", "Babasónicos", "Él Mató a un Policía Motorizado",  
"Patricio Rey y sus Redonditos de Ricota", "Serú Girán", "Pescado Rabioso", "Almendra",  
"Manal", "Moris", "Sui Generis", "Color Humano",  
"León Gieco", "Piero", "Javier Martínez", "David Lebón",  
"Joaquín Sabina", "Fito Páez", "Andrés Calamaro", "Indio Solari",  
"Skay Beilinson", "Walter Giardino", "Rata Blanca", "Hermética",  
"V8", "Almafuerte", "Carajo", "Divididos",  
"Catupecu Machu", "La Renga", "Los Piojos", "Attaque 77",  
"Los Violadores", "Flema", "2 Minutos", "Fun People",  
"Él Otro Yo", "Juana La Loca", "Miranda!", "Airbag",  
"Turf", "Árbol", "Tan Biónica", "Illya Kuryaki",  
"Los Tipitos", "Las Pastillas del Abuelo", "Ciro y los Persas", "La Vela Puerca",  
"Cuarteto de Nos", "No Te Va Gustar", "El Cuarteto Obrero", "Los Gardelitos",  
"Los Fabulosos Cadillacs", "Los Enanitos Verdes", "Los Abuelos de la Nada", "Virus",  
"Los Twist", "Suéter", "Soda Stereo", "Los Rodríguez",  
"GIT", "Riff", "Vox Dei", "Pappo",  
"Pedro Aznar", "Lito Vitale", "Javier Malosetti", "Jorge Navarro",  
"Lito Nebbia", "Jairo", "Sandra Mihanovich", "Celeste Carballo",  
"Víctor Heredia", "Mercedes Sosa", "Atahualpa Yupanqui", "Horacio Guarany",  
"Jorge Cafrune", "Armando Tejada Gómez", "María Elena Walsh", "Alfredo Zitarrosa",  
"Daniel Viglietti", "Los Chalchaleros", "Los Cantores del Alba", "Los Tucu Tucu",  
"Los Nocheros", "Soledad", "Los Alonsitos", "Los Manseros Santiagueños",  
"Los Carabajal", "Los Visconti", "Los del Suquía", "Los Trovadores",  
"Los Tekis", "Los Huayra", "Los Palmeras", "Los Ángeles Azules",  
"Ráfaga", "Amar Azul", "La Nueva Luna", "Los Totora",  
"Los Charros", "Los Lamas", "Los Yaguarú", "Los Wawancó",  
"Los del Fuego", "Los Palmeras", "Grupo Sombras", "Grupo Trinidad",  
"Grupo Red", "Grupo Cali", "Grupo Alegría", "Grupo Climax",  
"Grupo Green", "Grupo Trinidad", "Grupo Karicia", "Grupo Trinidad",  
"Grupo Red", "Grupo Cali", "Grupo Alegría", "Grupo Climax",  
"Grupo Green", "Grupo Trinidad", "Grupo Karicia", "Grupo Trinidad","El Padrino", "Titanic", "Forrest Gump", "Pulp Fiction", "El Señor de los Anillos",  
"Star Wars", "Jurassic Park", "Harry Potter", "Interestelar", "Inception",  
"Gladiador", "Matrix", "Avatar", "Toy Story", "Los Vengadores",  
"Batman: El Caballero de la Noche", "Joker", "Parásitos", "La La Land", "Whiplash",  
"El Rey León", "Eterno resplandor de una mente sin recuerdos", "Fight Club", "Shrek",  
"Amélie", "El Laberinto del Fauno", "Cidade de Deus", "Oldboy", "Roma",  
"La vida es bella", "Cinema Paradiso", "El viaje de Chihiro", "Seven Samurai",  
"El secreto de sus ojos", "Nueve reinas", "Relatos salvajes", "Esperando la carroza",  
"Un oso rojo", "El aura", "Tiempo de valientes", "El hijo de la novia",  
"Medianeras", "Wild Tales", "La odisea de los giles", "Argentina, 1985",  
"Lionel Messi", "Diego Maradona", "Manu Ginóbili", "Juan Martín del Potro",  
"Ricardo Darín", "Norma Aleandro", "Leonardo Sbaraglia", "Luis Brandoni",  
"Juan José Campanella", "Damián Szifrón", "Lucrecia Martel", "Érica Rivas",  
"Guillermo Francella", "Darío Grandinetti", "Alfredo Alcón", "Mercedes Morán",  
"Gustavo Cerati", "Charly García", "Fito Páez", "Luis Alberto Spinetta",  
"Mercedes Sosa", "Andrés Calamaro", "Vicentico", "Litto Nebbia",  
"Tini Stoessel", "Nicki Nicole", "Wos", "Duki", "María Becerra",  
"Jorge Luis Borges", "Julio Cortázar", "Ernesto Che Guevara", "Eva Perón",  
"Susana Giménez", "Marcelo Tinelli", "Mirtha Legrand", "Jorge Lanata",  
"Emanuel Ginóbili", "Luciana Aymar", "Sergio Martínez", "Guillermo Vilas"
];

// Variables del juego
let players = [];
let impostorIndexes = [];
let currentPlayerIndex = 0;
let randomFootballer = footballers[Math.floor(Math.random() * footballers.length)];

// Elementos del DOM
const setupScreen = document.getElementById("setupScreen");
const roleScreen = document.getElementById("roleScreen");
const waitingScreen = document.getElementById("waitingScreen");
const endScreen = document.getElementById("endScreen");
const playersContainer = document.getElementById("playersContainer");

const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");
const nextPlayerBtn = document.getElementById("nextPlayerBtn");
const restartBtn = document.getElementById("restartBtn");
const addPlayerBtn = document.getElementById("addPlayerBtn");
const removePlayerBtn = document.getElementById("removePlayerBtn");
const impostorCountInput = document.getElementById("impostorCount");

const currentPlayerEl = document.getElementById("currentPlayer");
const currentRoleEl = document.getElementById("currentRole");
const impostorRevealEl = document.getElementById("impostorReveal");

// Event listeners
startBtn.addEventListener("click", startGame);
continueBtn.addEventListener("click", showWaitingScreen);
nextPlayerBtn.addEventListener("click", showNextPlayer);
restartBtn.addEventListener("click", restartGame);
addPlayerBtn.addEventListener("click", addPlayerInput);
removePlayerBtn.addEventListener("click", removePlayerInput);
impostorCountInput.addEventListener("change", validateImpostorCount);

// Función para agregar un nuevo campo de jugador
function addPlayerInput() {
    const playerCount = playersContainer.children.length;
    if (playerCount >= 10) {
        alert("Máximo 10 jugadores permitidos");
        return;
    }

    const playerId = `player${playerCount + 1}`;
    const div = document.createElement('div');
    div.className = 'player-input';
    div.innerHTML = `
                <label for="${playerId}">Jugador ${playerCount + 1}:</label>
                <input type="text" id="${playerId}" placeholder="Nombre del jugador">
            `;
    playersContainer.appendChild(div);

    // Actualizar el máximo de impostores posible
    validateImpostorCount();
}

// Función para eliminar el último campo de jugador
function removePlayerInput() {
    if (playersContainer.children.length > 2) {
        playersContainer.removeChild(playersContainer.lastChild);
        validateImpostorCount();
    } else {
        alert("Debe haber al menos 2 jugadores");
    }
}

// Validar que el número de impostores no exceda el número de jugadores
function validateImpostorCount() {
    const playerCount = playersContainer.children.length;
    const maxImpostors = Math.max(1, playerCount - 1);

    if (impostorCountInput.value > maxImpostors) {
        impostorCountInput.value = maxImpostors;
    }
    impostorCountInput.max = maxImpostors;
}

// Función para iniciar el juego
function startGame() {
    // Obtener nombres de jugadores
    players = [];
    const inputs = playersContainer.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        const name = input.value.trim() || `Jugador ${players.length + 1}`;
        players.push(name);
    });

    // Validar que haya al menos 2 jugadores
    if (players.length < 2) {
        alert("Debe haber al menos 2 jugadores");
        return;
    }

    // Obtener número de impostores
    impostorCount = parseInt(impostorCountInput.value);
    const maxImpostors = players.length - 1;

    if (impostorCount < 1 || impostorCount > maxImpostors) {
        alert(`Debe haber entre 1 y ${maxImpostors} impostores`);
        return;
    }

    // Elegir impostores al azar
    impostorIndexes = [];
    const availableIndexes = [...Array(players.length).keys()];

    for (let i = 0; i < impostorCount; i++) {
        const randomPos = Math.floor(Math.random() * availableIndexes.length);
        impostorIndexes.push(availableIndexes[randomPos]);
        availableIndexes.splice(randomPos, 1);
    }

    // Reiniciar asignaciones de futbolistas
    assignedFootballers = new Map();

    // Ocultar pantalla de inicio y mostrar primer jugador
    setupScreen.style.display = "none";
    currentPlayerIndex = 0;
    showPlayerRole();
}

// Mostrar rol del jugador actual
function showPlayerRole() {
    roleScreen.style.display = "block";
    waitingScreen.style.display = "none";
    endScreen.style.display = "none";

    const player = players[currentPlayerIndex];
    currentPlayerEl.textContent = player;

    if (impostorIndexes.includes(currentPlayerIndex)) {
        currentRoleEl.innerHTML = '<span class="impostor">¡Tú eres el IMPOSTOR!</span>' +
            '<p>Tu objetivo es hacer creer que sabes de fútbol sin ser descubierto.</p>';
    } else {
        // Asignar futbolista único por jugador
        let availableFootballers = footballers.filter(f => !Array.from(assignedFootballers.values()).includes(f));
        if (availableFootballers.length === 0) {
            availableFootballers = [...footballers]; // Reset si se acaban
        }

        currentRoleEl.innerHTML = `<span class="footballer">Tu futbolista es:<br><strong>${randomFootballer}</strong></span>` +
            `<p>Tu objetivo es descubrir quién no conoce realmente de fútbol.</p>`;
    }
}

// Mostrar pantalla de espera
function showWaitingScreen() {
    roleScreen.style.display = "none";
    waitingScreen.style.display = "block";
}

// Mostrar siguiente jugador o finalizar
function showNextPlayer() {
    currentPlayerIndex++;
    if (currentPlayerIndex < players.length) {
        showPlayerRole();
    } else {
        restartGame();
    }
}


// Reiniciar el juego
function restartGame() {
    currentPlayerIndex = 0;
    setupScreen.style.display = "block";
    endScreen.style.display = "none";
    impostorIndexes = [];
    randomFootballer = footballers[Math.floor(Math.random() * footballers.length)];
}