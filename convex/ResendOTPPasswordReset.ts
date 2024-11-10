import Resend from "@auth/core/providers/resend";
import { Resend as ResendAPI } from "resend";
import { alphabet, generateRandomString } from "oslo/crypto";

export const ResendOTPPasswordReset = Resend({
  id: "resend-otp",
  apiKey: process.env.AUTH_RESEND_KEY,

  async generateVerificationToken() {
    return generateRandomString(8, alphabet("0-9"));
  },

  async sendVerificationRequest({ identifier: email, provider, token }) {
    const resend = new ResendAPI(provider.apiKey);

    const message = `
      <h1>Reset Your Password</h1>
      <p>Dear user,</p>
      <p>
        You recently requested to reset your password for our application.
        To complete this process, please use the following one-time password:
      </p>
      <h2>${token}</h2>
      <p>
        This code is valid for the next 15 minutes.
        If you did not request a password reset, please ignore this email.
      </p>
      <p>
        Thank you,<br>
        The My App Team
      </p>
    `;

    const { error } = await resend.emails.send({
      from: "My App <onboarding@resend.dev>",
      to: [email],
      subject: "Reset Your Password in My App",
      html: message,
    });

    if (error) {
      throw new Error("Could not send password reset email");
    }
  },
});