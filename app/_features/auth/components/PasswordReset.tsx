// import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { TriangleAlert } from 'lucide-react';
// import { useAuthActions } from '@convex-dev/auth/react';

// interface PasswordResetProps {
//   email: string;
//   code: string;
//   newPassword: string;
//   confirmNewPassword: string;
//   onReset: (e: React.FormEvent) => void;
//   onResendOTP: () => void;
//   onCancel: () => void;
// }

// const PasswordReset: React.FC<PasswordResetProps> = ({
//   email,
//   code,
//   newPassword,
//   confirmNewPassword,
//   onReset,
//   onResendOTP,
//   onCancel
// }) => {
//   const { signIn } = useAuthActions();
//   const [error, setError] = useState('');
//   const [pending, setPending] = useState(false);

//   const handlePasswordReset = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (newPassword !== confirmNewPassword) {
//       setError("New password and confirm password do not match");
//       return;
//     }

//     if (newPassword.length < 8) {
//       setError("New password must be at least 8 characters long");
//       return;
//     }

//     try {
//       setPending(true);
      
//       // Verify the OTP first
//       await signIn("resend-password-reset", {
//         email,
//         code,
//         flow: "resetPassword"
//       });

//       // Then update the password
//       await signIn("reset-password", {
//         email,
//         newPassword,
//         code
//       });

//       setError("Password successfully reset. Please sign in with your new password.");
//     } catch (error: any) {
//       setError(error.message);
//     } finally {
//       setPending(false);
//     }
//   };

//   return (
//     <Card className="bg-black/60 backdrop-blur-lg border-white/10 w-full max-w-md">
//       <CardHeader>
//         <CardTitle className="text-white">Reset Password</CardTitle>
//       </CardHeader>
//       <CardContent>
//         {error && (
//           <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm flex items-center gap-2">
//             <TriangleAlert className="h-4 w-4" />
//             {error}
//           </div>
//         )}
//         <form onSubmit={handlePasswordReset} className="space-y-4">
//           <Input
//             name="code"
//             type="text"
//             placeholder="Enter verification code"
//             value={code}
//             onChange={(e) => onReset({ ...e, currentTarget: { ...e.currentTarget, name: 'code', value: e.currentTarget.value } })}
//             className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
//             disabled={pending}
//             required
//             pattern="[0-9]*"
//             inputMode="numeric"
//             maxLength={6}
//           />
//           <Input
//             name="newPassword"
//             type="password"
//             placeholder="Enter new password"
//             value={newPassword}
//             onChange={(e) => onReset({ ...e, currentTarget: { ...e.currentTarget, name: 'newPassword', value: e.currentTarget.value } })}
//             className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
//             disabled={pending}
//             required
//           />
//           <Input
//             name="confirmNewPassword"
//             type="password"
//             placeholder="Confirm new password"
//             value={confirmNewPassword}
//             onChange={(e) => onReset({ ...e, currentTarget: { ...e.currentTarget, name: 'confirmNewPassword', value: e.currentTarget.value } })}
//             className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
//             disabled={pending}
//             required
//           />
//           <div className="flex gap-4">
//             <Button
//               type="submit"
//               className="flex-1 bg-white text-black hover:bg-white/90"
//               disabled={pending}
//             >
//               Reset Password
//             </Button>
//             <Button
//               type="button"
//               variant="outline"
//               className="border-white/20 text-white hover:bg-white/10"
//               onClick={onResendOTP}
//               disabled={pending}
//             >
//               Resend Code
//             </Button>
//             <Button
//               type="button"
//               variant="outline"
//               className="border-white/20 text-white hover:bg-white/10"
//               onClick={onCancel}
//               disabled={pending}
//             >
//               Cancel
//             </Button>
//           </div>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default PasswordReset;