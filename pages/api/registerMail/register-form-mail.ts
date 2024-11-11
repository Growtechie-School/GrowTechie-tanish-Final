import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { parseForm, config } from '@/pages/api/utils/parseForm';

export { config };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    console.log('Parsing form data...');
    const { fields } = await parseForm(req);
    console.log('Form data parsed:', fields);

    const { 
      name, 
      email, 
      phoneNumber, 
      courseTitle,
      courseDate,
      courseDuration,
      coursePrice 
    } = fields;

    if (!name || !email || !phoneNumber) {
      console.log('Missing required fields:', { name, email, phoneNumber });
      return res.status(400).json({ message: 'Missing required fields' });
    }

    console.log('Creating nodemailer transporter...');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log('Sending email to admin...');
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: 'growtechie.ind@gmail.com',
      subject: `New Registration: ${courseTitle}`,
      text: `
        New Course Registration:
        Course: ${courseTitle}
        Name: ${name}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Course Date: ${courseDate}
        Course Duration: ${courseDuration}
        Course Price: ${coursePrice}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #007bff;">New Course Registration</h2>
          <h3>Course Details:</h3>
          <p>Course: <strong>${courseTitle}</strong></p>
          <p>Date: <strong>${courseDate}</strong></p>
          <p>Duration: <strong>${courseDuration}</strong></p>
          <p>Price: <strong>${coursePrice}</strong></p>
          <h3>Student Details:</h3>
          <p>Name: <strong>${name}</strong></p>
          <p>Email: <strong>${email}</strong></p>
          <p>Phone Number: <strong>${phoneNumber}</strong></p>
        </div>
      `,
    });

    console.log('Sending welcome email to user...');
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: `Welcome to ${courseTitle} - Growtechie`,
      text: `
        Dear ${name},

        Thank you for registering for ${courseTitle}!

        Course Details:
        Start Date: ${courseDate}
        Duration: ${courseDuration}
        Investment: ${coursePrice}

        We're excited to have you join us and look forward to your participation.
        We will contact you shortly on your provided phone number: ${phoneNumber}

        If you have any questions, please don't hesitate to reach out.

        Best regards,
        Growtechie Team
      `,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #007bff;">Welcome to ${courseTitle}!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for registering for our course. We're excited to have you join us!</p>
          
          <h3>Course Details:</h3>
          <ul style="list-style: none; padding-left: 0;">
            <li>📅 Start Date: <strong>${courseDate}</strong></li>
            <li>⏱️ Duration: <strong>${courseDuration}</strong></li>
            <li>💰 Investment: <strong>${coursePrice}</strong></li>
          </ul>

          <p>We will contact you shortly on your provided phone number: <strong>${phoneNumber}</strong></p>
          <p>If you have any questions, please don't hesitate to reach out.</p>
          <br>
          <p style="font-style: italic;">Best regards,<br>Growtechie Team</p>
        </div>
      `,
    });

    console.log('Emails sent successfully');
    res.status(200).json({
      message: 'Contact form submitted successfully',
      successMessage: 'Thanks for reaching out to Growtechie!',
    });
  } catch (error) {
    console.error('Error in submit-contact-form:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    res.status(500).json({ message: 'Error submitting contact form' });
  }
}