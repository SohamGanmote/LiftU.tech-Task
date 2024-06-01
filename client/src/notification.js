const button = document.getElementById("notificationBtn");

button.addEventListener("click", () => {
	Notification.requestPermission().then((perm) => {
		if (perm === "granted") {
			new Notification("Damn!");
		}
	});
});
