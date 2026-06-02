const qrInput = document.getElementById("qrInput");
const generateBtn = document.getElementById("generateBtn");
const qrBox = document.getElementById("qrBox");
const qrImage = document.getElementById("qrImage");

generateBtn.addEventListener("click", generateQRCode);

function generateQRCode() {
  const inputValue = qrInput.value.trim();

  if (inputValue === "") {
    alert("Please enter text or URL");
    return;
  }

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(inputValue)}`;

  qrImage.src = qrUrl;
  qrBox.classList.remove("hidden");
}