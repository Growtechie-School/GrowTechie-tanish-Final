// import { useMutation } from "convex/react";
// import { api } from "@/convex/_generated/api";
// import React from "react";

// interface ForgotPasswordProps {
//   mail: string;
// }

// const ForgotPassword = ({ mail }: ForgotPasswordProps) => {
//   // Updated to use the correct path
//   const { email } = useMutation(api.user.ifUserExist);

//   const handleSendOTP = async () => {
//     try {
//         await signIn("resend-otp", {
//             email: ,
//             flow: "signUp" // Specify the flow
//           });
//       console.log("OTP sent successfully");
//     } catch (error) {
//       console.error("Failed to send OTP:", error);
//     }
//   };
// }