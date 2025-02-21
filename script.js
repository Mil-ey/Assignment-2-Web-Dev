const nameInput = document.getElementById("name-input");
const saveButton = document.getElementById("save-btn");
const clearButton = document.getElementById("clear-btn");
const displayName = document.getElementById("display-name");
function saveName() {
    const name = nameInput.value;
    if (name !== "") {
        localStorage.setItem("name", name);
        displaySavedName();
    }
} 
function displaySavedName() {
    const savedName = localStorage.getItem("name");
    if (savedName !== null) {
        displayName.textContent = savedName;
    }
}
function clearName() {
    localStorage.removeItem("name");
    displayName.textContent = "";
    nameInput.value = "";
}
saveButton.addEventListener("click", function(event)
{
    event.preventDefault();
    saveName();
});

clearButton.addEventListener("click", clearName);
window.addEventListener("load", displaySavedName);
