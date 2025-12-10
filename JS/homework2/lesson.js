
const savedName = localStorage.getItem("username");

if (savedName) {
    document.getElementById("displayName").textContent = savedName;
}


document.getElementById("saveBtn").addEventListener("click", function () {
    const inputValue = document.getElementById("nameInput").value.trim();

    if (inputValue.length === 0) return;

    
    localStorage.setItem("username", inputValue);

    
    document.getElementById("displayName").textContent = inputValue;
});