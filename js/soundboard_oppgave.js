import { sounds } from "./sounds.js";

// 1.1 Catch the HTML element with id drumkit
const drumkit = document.getElementById("drumkit");

// 1.2 Console log the drumkit element
console.log(drumkit);

// 2. Console log the fetched sounds
console.log(sounds);

// 2.2 Console log the keys of the sounds
sounds.forEach(sound => console.log(sound.key));

// 3. Create a functioning soundboard
function drumComponent(sound) {
    // 3.1 Create button element
    const buttonEl = document.createElement("button");
    buttonEl.textContent = sound.name;
    buttonEl.classList.add("sound-button");

    // 3.2 Create audio element
    const audioEl = document.createElement("audio");
    audioEl.src = sound.file;
    audioEl.id = sound.key;

    // 3.3 Add event listener for keydown
    document.addEventListener("keydown", (event) => {
        if (event.key.toLowerCase() === sound.key) {
            audioEl.currentTime = 0;
            audioEl.play();
        }
    });

    // 3.5 Add event listener for button click
    buttonEl.addEventListener("click", () => {
        audioEl.currentTime = 0;
        audioEl.play();
    });

    // 3.6 Append button and audio to drumkit
    drumkit.appendChild(buttonEl);
    drumkit.appendChild(audioEl);
}

// 4. Loop over sounds and create buttons
function createDrumKit() {
    sounds.forEach(drumComponent);
}

// 4.1 Call function to generate buttons
createDrumKit();
