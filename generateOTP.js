function generateOTP() {
var digits = '0123456789';
let OTP = '';
for (let i = 0; i < 6; i++ ) {
    console.log(Math.random());
    console.log(Math.random() * 10);
    console.log(Math.floor(Math.random() * 10));
    
OTP += digits[Math.floor(Math.random() * 10)];
}
return OTP;
}
console.log(generateOTP());
