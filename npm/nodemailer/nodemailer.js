const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
})

// console.log(transporter)

async function sendEmail() {
    const mailOptions = {
        from: "",
        to: "",
        subject: "My first email test using nodemailer npm package",
        text: "Testing node mailer npm package"
    }
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.log(error)
    }
}

sendEmail()

