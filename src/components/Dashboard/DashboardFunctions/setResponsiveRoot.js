export const setRootStyle = (open) => {
	let screenWidth =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;
	let rootElement = document.getElementById("root");
	let bodyRef = document.body;
	let htmlRef = document.documentElement;
	let isLogged = sessionStorage.isLogged;
	if (!open && screenWidth <= 950 && screenWidth > 550 && isLogged) {
		rootElement.style.cssText =
			"transition: left 250ms ease-in-out;position: relative; left: -90px; display: flex; width: calc(100vw + 90px)";
		bodyRef.style.cssText = "";
		htmlRef.style.cssText = "";
	} else if (!open && screenWidth <= 550 && isLogged) {
		rootElement.style.cssText =
			"transition: left 250ms ease-in-out; position: relative; left: -69px;  display: flex; width: calc(100vw + 69px);  overflow-y: hidden";
	} else if (open && screenWidth <= 950 && isLogged) {
		rootElement.style.cssText =
			"transition: left 250ms ease-in-out; position: relative; left: 0;  display: flex; width: calc(100vw + 90px) ";
		bodyRef.style.cssText = "overflow-y: hidden";
		htmlRef.style.cssText = "overflow-y: hidden";
	} else {
		bodyRef.style.cssText = "";
		htmlRef.style.cssText = "";
		rootElement.style.cssText = "";
	}
};
