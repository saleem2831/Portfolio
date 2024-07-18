import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Use the correct SMTP server
    port: 587, // or 465 for SSL
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'shaiksaleem2831@gmail.com',
        pass: 'accp xqud jphc mzsn',
    },
});

async function sendEmail(mailOptions) {
    try {
        console.log('Sending email with options:', mailOptions);
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error details:', error);
        throw error; // Re-throw the error to be caught in the handler
    }
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const mailOptions = {
            from: email,
            to: 'shaiksaleem2831@gmail.com',
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
        };

        try {
            console.log('Received POST request');
            await sendEmail(mailOptions);
            res.status(200).json({ message: 'Form submitted successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'An error occurred while sending the email.', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
