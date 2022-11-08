function toggleTheme() {
    let darkmode = document.getElementById("body");
    darkmode.classList.toggle("dark-mode");
}

let buttonVariable = document.getElementById("toggleButton");

buttonVariable.onclick = toggleTheme;

