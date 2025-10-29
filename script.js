// Page fade-in animation
document.body.classList.add("fade-in");

// Simulate online players (demo)
const playerCountEl = document.getElementById("playerCount");
if (playerCountEl) {
  function updatePlayers() {
    const players = Math.floor(Math.random() * 50) + 1;
    playerCountEl.textContent = players;
  }
  updatePlayers();
  setInterval(updatePlayers, 10000);
}
