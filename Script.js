function updateTime() {
  const timeElement = document.getElementById("time");
  timeElement.textContent = Date.now();
}

// This update the time every second 
updateTime();
setInterval(updateTime, 1000);
