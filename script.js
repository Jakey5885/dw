// Page fade-in animation
document.body.classList.add("fade-in");

// MCSrvStat API URL
const apiUrl = "https://api.mcsrvstat.us/3/airlinesmp.falixsrv.me";

// Function to fetch live server status
async function updateServerStatus() {
  try {
    const resp = await fetch(apiUrl, {
      headers: {
        "User-Agent": "AirlineSMP-Website"
      }
    });
    const data = await resp.json();
    if (data.online) {
      document.getElementById("playerCount").textContent = data.players.online;
    } else {
      document.getElementById("playerCount").textContent = "0";  
    }
  } catch(err) {
    console.error("Error fetching server status:", err);
    document.getElementById("playerCount").textContent = "−";
  }
}

// Initial fetch
updateServerStatus();

// Refresh every 30 seconds
setInterval(updateServerStatus, 30000);
