document.body.classList.add("fade-in");

const apiUrl = "https://api.mcsrvstat.us/3/airlinesmp.falixsrv.me";

// Fetch live player count
async function updateServerStatus() {
  const playerCountEl = document.getElementById("playerCount");
  if (!playerCountEl) return;

  try {
    const resp = await fetch(apiUrl);
    const data = await resp.json();
    if (data.online) {
      playerCountEl.textContent = data.players.online;
    } else {
      playerCountEl.textContent = "0";
    }
  } catch(err) {
    console.error(err);
    playerCountEl.textContent = "−";
  }
}

updateServerStatus();
setInterval(updateServerStatus, 30000);

// Airplane transition on page change
const airplane = document.getElementById("airplane-transition");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    airplane.style.display = "block";
    airplane.style.left = "-200px";

    airplane.animate(
      [
        { transform: "translateY(-50%) translateX(0)" },
        { transform: "translateY(-50%) translateX(120vw)" }
      ],
      { duration: 1500, easing: "ease-in-out" }
    );

    setTimeout(() => {
      window.location.href = href;
    }, 1500);
  });
});
