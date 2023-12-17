function openDialog() {
    document.getElementById("dialog").style.display = "block";
}

function closeDialog() {
    document.getElementById("dialog").style.display = "none";
}

function submit() {
    let text = document.getElementById("text").value;
    alert("Submitted: " + text);
}