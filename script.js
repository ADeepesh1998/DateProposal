const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const proposal = document.getElementById("proposal");
const celebration = document.getElementById("celebration");
const message = document.getElementById("message");

const confirmBtn = document.getElementById("confirmBtn");
const datePicker = document.getElementById("datePicker");
const selectedDate = document.getElementById("selectedDate");

const texts = [
    "Are you sure? 🥺",
    "One date won't hurt ❤️",
    "I promise it'll be memorable 🌹",
    "Please? 😊",
    "Come on Tanishka 🥹",
    "You know you want to 😄"
];

let count = 0;

function moveButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    message.innerHTML = texts[count % texts.length];

    count++;
}

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("mousemove", moveButton);

yesBtn.addEventListener("click", () => {

    proposal.style.display = "none";
    celebration.classList.remove("hidden");

    confetti({
        particleCount: 250,
        spread: 180
    });

});

confirmBtn.addEventListener("click", () => {

    if (datePicker.value === "") {
        alert("Please select a date ❤️");
        return;
    }

    selectedDate.innerHTML =
        "🌹 It's a date!<br><br>See you on <b>" +
        datePicker.value +
        "</b> ❤️";

    confetti({
        particleCount: 300,
        spread: 180
    });

});