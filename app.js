window.onload = function() {
    changeGradient(); 
    document.getElementById("colour1").addEventListener("input", changeGradient);
    document.getElementById("colour2").addEventListener("input", changeGradient);
};


function changeGradient() {
    let color1 = document.getElementById("colour1").value;
    let color2 = document.getElementById("colour2").value;

    let gradientDiv = document.getElementById("gradientDiv");

    
    gradientDiv.style.background = `linear-gradient(to right, ${color1}, ${color2})`;

    
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;

    
    document.getElementById("currentColors").textContent = `${color1} → ${color2}`;
}


function resetGradient() {
    const initialColor1 = "#ff0000";
    const initialColor2 = "#0000ff";

    document.getElementById("colour1").value = initialColor1;
    document.getElementById("colour2").value = initialColor2;

    changeGradient();
}


function copyCSSGradient() {
    let color1 = document.getElementById("colour1").value;
    let color2 = document.getElementById("colour2").value;

    let cssGradient = `linear-gradient(to right, ${color1}, ${color2})`;

    navigator.clipboard.writeText(cssGradient)
        .then(() => alert("CSS Gradient Copied! Paste in your project: " + cssGradient))
        .catch(() => alert("Failed to copy colors"));
}

function copyTailwindGradient() {
    let color1 = document.getElementById("colour1").value;
    let color2 = document.getElementById("colour2").value;

    let tailwindGradient = `bg-gradient-to-r from-[${color1}] to-[${color2}]`;
navigator.clipboard.writeText(tailwindGradient)
    .then(() => {
        Swal.fire({
            title: "Tailwind Gradient Copied!",
            text: "Paste in your project: " + tailwindGradient,
            icon: "success",
            draggable: true
        });
    })
    .catch(() => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    });
}