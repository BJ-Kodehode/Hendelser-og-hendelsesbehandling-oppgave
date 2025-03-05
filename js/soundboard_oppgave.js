import { sounds } from "../data/soundsJSexample.js";

// 1. Hent HTML-elementet med id "drumkit"
const drumkit = document.getElementById("drumkit");

// 2. Sjekk at elementet finnes
if (!drumkit) {
  console.error("Elementet med ID 'drumkit' finnes ikke.");
} else {
  console.log("Lyder lastet inn:", sounds);

  // 3. Funksjon for å lage knapper og lyder
  function createSoundButton(sound) {
    const button = document.createElement("button");
    button.textContent = `(${sound.key}) ${sound.name}`;
    button.classList.add("sound-button");

    // 4. Sett opp lydfilen
    const audio = document.createElement("audio");
    audio.src = `./data/${sound.file}`;
    audio.id = sound.key;

    // 5. Spill av lyd ved klikk på knapp
    button.addEventListener("click", () => {
      audio.currentTime = 0;
      audio.play();
    });

    // 6. Spill av lyd ved tastetrykk
    window.addEventListener("keydown", (event) => {
      if (event.key.toLowerCase() === sound.key.toLowerCase()) {
        audio.currentTime = 0;
        audio.play();
      }
    });

    // 7. Legg til knapp og lyd i "drumkit"
    drumkit.appendChild(button);
    drumkit.appendChild(audio);
  }

  // 8. Opprett alle knappene
  sounds.forEach(createSoundButton);
}
