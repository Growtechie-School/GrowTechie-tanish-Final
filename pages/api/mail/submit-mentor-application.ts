import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { parseForm, config } from '@/pages/api/utils/parseForm';

export { config }; // Export config to disable Next.js body parser

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    console.log('Parsing form data...');
    const { fields, files } = await parseForm(req);
    console.log('Form data parsed:', { fields, files });

    const { fullName, email, phoneCode, phoneNumber, role, contribute } = fields;
    const resume = files.resume?.[0];

    if (!fullName || !email || !phoneNumber || !role) {
      console.log('Missing required fields:', { fullName, email, phoneNumber, role, contribute });
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

    console.log('Sending email...');
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: 'growtechie.ind@gmail.com',
      subject: 'Mentor Application Received.',
      text: `
        New mentor application received:
        
        Full Name: ${fullName}
        Email: ${email}
        Phone: ${phoneCode}${phoneNumber}
        Contribute: ${contribute}
        Role: ${role}
        Resume: ${resume ? 'Attached' : 'Not provided'}
      `,
      attachments: resume
        ? [
            {
              filename: resume.originalFilename,
              content: resume.filepath,
            },
          ]
        : [],
    });

    console.log('Email sent successfully');
    res.status(200).json({ 
      message: 'Application submitted successfully',
      successMessage: 'Thanks for applying for mentorship in growtechie'
    });
  } catch (error) {
    console.error('Error in submit-mentor-application:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    res.status(500).json({ message: 'Error submitting application' });
  }
}