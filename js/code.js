
alert("Hey");

var input = document.getElementById("angle");
var btn = document.getElementById("btnGo");
var needle = document.getElementById("mikbilddiv");



// Set up click event handler
btn.addEventListener("click", start_animation);

// Storage for the previous angle
var lastAngle = "";


function start_animation() {
    // Update the total angle needed
    lastAngle = +lastAngle + +input.value;

    // For testing:
    console.clear()
    console.log("Current total angle: " + lastAngle);

    // Move the needle:
    needle.style.transform = "rotate(" + lastAngle + "deg)";
}

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== null) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});