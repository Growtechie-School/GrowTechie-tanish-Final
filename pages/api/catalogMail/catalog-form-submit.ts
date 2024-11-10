// import type { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';
// import { parseForm, config } from '@/pages/api/utils/parseForm';

// export { config };

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   try {
//     console.log('Parsing form data...');
//     const { fields } = await parseForm(req);
//     console.log('Form data parsed:', fields);

//     const { name, email, message } = fields;

//     if (!name || !email || !message) {
//       console.log('Missing required fields:', { name, email, message });
//       return res.status(400).json({ message: 'Missing required fields' });
//     }

//     console.log('Creating nodemailer transporter...');
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: parseInt(process.env.SMTP_PORT || '587'),
//       secure: process.env.SMTP_SECURE === 'true',
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     console.log('Sending email to admin...');
//     await transporter.sendMail({
//       from: process.env.FROM_EMAIL,
//       to: 'growtechie.ind@gmail.com',
//       subject: 'New member is interested in the seminar',
//       text: `
//         New Seminar Registration:
//         Name: ${name}
//         Email: ${email}
//         Seminar Topic: ${message}
//       `,
//     });

//     console.log('Sending welcome email to user...');
//     await transporter.sendMail({
//       from: process.env.FROM_EMAIL,
//       to: email,
//       subject: `Welcome to Growtechie's ${message} Seminar!`,
//       text: `
//         Dear ${name},

//         Thank you for your interest in the ${message} seminar.
//         We're excited to have you join us and look forward to your participation.

//         If you have any questions, please don't hesitate to reach out.

//         Best regards,
//         Growtechie Team
//       `,
//     });

//     console.log('Emails sent successfully');
//     res.status(200).json({
//       message: 'Contact form submitted successfully',
//       successMessage: 'Thanks for reaching out to Growtechie!',
//     });
//   } catch (error) {
//     console.error('Error in submit-contact-form:', error);
//     if (error instanceof Error) {
//       console.error('Error message:', error.message);
//       console.error('Error stack:', error.stack);
//     }
//     res.status(500).json({ message: 'Error submitting contact form' });
//   }
// }

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

    const { name, email, message } = fields;

    if (!name || !email || !message) {
      console.log('Missing required fields:', { name, email, message });
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
      subject: 'New member is interested in the seminar',
      text: `New Seminar Registration:\nName: ${name}\nEmail: ${email}\nSeminar Topic: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #007bff;">New Seminar Registration</h2>
          <p>Name: <strong>${name}</strong></p>
          <p>Email: <strong>${email}</strong></p>
          <p>Seminar Topic: <strong>${message}</strong></p>
        </div>
      `,
    });

    console.log('Sending welcome email to user...');
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: `Welcome to Growtechie's ${message} Seminar!`,
      text: `
        Dear ${name},

        Thank you for your interest in the ${message} seminar.
        We're excited to have you join us and look forward to your participation.

        If you have any questions, please don't hesitate to reach out.

        Best regards,
        Growtechie Team
      `,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #007bff;">Welcome to Growtechie's ${message} Seminar!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for your interest in the ${message} seminar. We're excited to have you join us and look forward to your participation.</p>
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