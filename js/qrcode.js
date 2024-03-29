const qrText = 'https://example.com';

const qrCodeElement = document.querySelector('#qrcode');

new QRCode(qrCodeElement, qrText);