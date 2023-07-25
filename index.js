
  function generateQRCode() {
     var qrContent = document.getElementById('qr-content').value;
//var qrContent="www.google.com";
    var qrCodeElement = document.getElementById('qr-code');

    // Clear existing QR code, if any
    qrCodeElement.innerHTML = '';

    // Generate new QR code
    var qrCode = new QRCode(qrCodeElement, {
      text: qrContent,
      width: 128,
      height: 128,

    });
  }
