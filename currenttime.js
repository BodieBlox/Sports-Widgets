function displayTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString(); // 12-hour format by default
  
    document.getElementById("current-time").textContent = timeString;
  }
  
  setInterval(displayTime, 1000); // Update every second