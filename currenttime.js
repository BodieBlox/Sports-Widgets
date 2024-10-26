function updateTime() {
    const options = { timeZone: 'America/New_York', hour: 'numeric', minute: 'numeric', hour12: true };
    const timeString = new Intl.DateTimeFormat('en-US', options).format(new Date());
    document.getElementById('current-time').textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();