import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, phone, message } = JSON.parse(req.body);

        // Configure nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'aayush.rijal99@gmail.com',
                pass: 'pgrs lbzx nlnh razd'
            }
        });

        // Send email
        try {
            await transporter.sendMail({
                from: email,
                to: 'aayush.rijal99@gmail.com',
                subject: 'Aayush Rijal Website Enquiry',
                text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
            });
            res.status(200).json({ message: 'Your enquiry has been submitted successfully! I will get back to you as soon as possible. Thank you!' });
        } catch (error) {
            res.status(500).json({ message: 'Failed to send enquiry. Please try again!' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}