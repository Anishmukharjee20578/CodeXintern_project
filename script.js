// Image upload functionality
document.getElementById("upload").addEventListener("change", function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    // Load the image into the design area
    reader.onload = function (event) {
        const design = document.getElementById("design");
        design.src = event.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

// Download button functionality
document.getElementById("downloadBtn").addEventListener("click", function () {
    html2canvas(document.querySelector("#tshirt-container")).then(function (canvas) {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "tshirt-design.png";
        link.click();
    });
});
