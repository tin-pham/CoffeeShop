export const messengerButton = document.querySelector(".button--messenger");
export const closeButton = document.querySelector(".chatbox .button--close");
const chatbox = document.querySelector(".chatbox");
messengerButton.addEventListener("click", showMessage);

closeButton.addEventListener("click", hideMessage);

function showMessage() {
	chatbox.classList.remove("hide");
	chatbox.classList.add("show");

	messengerButton.classList.add("hide");
}

function hideMessage() {
	chatbox.classList.remove("show");
	chatbox.classList.add("hide");
	messengerButton.classList.remove("hide");
}
