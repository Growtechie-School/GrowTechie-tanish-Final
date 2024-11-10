import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Input validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: 'growtechie.ind@gmail.com',
      subject: 'New Contact Form Submission',
      text: `
        New contact form submission:
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending message' });
  }
}