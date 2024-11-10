import { Email } from "@convex-dev/auth/providers/Email";
import { Resend as ResendAPI } from "resend";
import { alphabet, generateRandomString } from "oslo/crypto";

export const ResendOTP = Email({
  id: "resend-otp",
  apiKey: process.env.AUTH_RESEND_KEY,
  maxAge: 60 * 15, // 15 minutes

  async generateVerificationToken() {
    return generateRandomString(6, alphabet("0-9"));
  },

  async sendVerificationRequest({ identifier: email, provider, token }) {
    const resend = new ResendAPI(provider.apiKey);

    const message = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sign in to GrowTechie</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .code-box {
            background-color: #fff;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 20px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            margin: 20px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to GrowTechie!</h1>
          <p>Thank you for choosing GrowTechie. To complete your sign-in, please use the code below:</p>
          <div class="code-box">${token}</div>
          <p>This code will expire in 15 minutes.</p>
          <p>If you did not request this, please ignore this message.</p>
          <br>
          <p>Best regards,</p>
          <p>The GrowTechie Team</p>
        </div>
      </body>
      </html>
    `;

    const { error } = await resend.emails.send({
      from: "GrowTechie <onboarding@resend.dev>",
      to: [email],
      subject: "Sign in to GrowTechie",
      html: message,
    });

    if (error) {
      throw new Error(`Failed to send email: ${JSON.stringify(error)}`);
    }
  },
});