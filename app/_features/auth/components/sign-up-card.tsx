import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff, TriangleAlert, ArrowLeft } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useAuthActions } from '@convex-dev/auth/react';
import { useRouter } from 'next/navigation';

type SignInFlow = "signIn" | "signUp";
type SignUpStep = "initial" | "otp-sent";
type OAuthProvider = "google" | "github";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  code: string;
}

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

const SignUpCard: React.FC<SignUpCardProps> = ({ setState }) => {
  const { signIn } = useAuthActions();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    code: ""
  });
  
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [step, setStep] = useState<SignUpStep>("initial");
  const router = useRouter();

  const handleInitialSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError("");
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    try {
      setPending(true);
      // Only send the OTP initially
      await signIn("resend-otp", {
        email: formData.email,
        flow: "signUp" // Specify the flow
      });
      setStep("otp-sent");
    } catch (error: any) {
      console.error("Error sending OTP:", error);
      handleError(error);
    } finally {
      setPending(false);
    }
  };

  const handleOTPVerification = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError("");

    if (formData.code.length !== 6) {
      setError("Please enter a valid 6-digit code");
      return;
    }

    try {
      setPending(true);
      
      // First verify the OTP
      await signIn("resend-otp", {
        email: formData.email,
        code: formData.code,
        flow: "signUp"
      });
      
      // After successful OTP verification, create the account
      await signIn("password", {
        email: formData.email,
        password: formData.password,
        name: formData.name, // Include name for user table
        flow: "signUp" // Specify sign up flow
      });

      router.push("/");
      
      // Account created successfully
      // The user table will be automatically updated with the name
      // through the auth webhook or mutation
      
    } catch (error: any) {
      console.error("Error during verification:", error);
      handleError(error);
    } finally {
      setPending(false);
    }
  };

  const handleError = (error: any) => {
    const errorMsg = error.message?.toLowerCase() || '';
    
    if (errorMsg.includes("could not verify code")) {
      setError("Invalid verification code. Please try again.");
    } else if (errorMsg.includes("configuration error")) {
      setError("System configuration error. Please contact support.");
    } else if (errorMsg.includes("rate limit")) {
      setError("Too many attempts. Please try again later.");
    } else if (errorMsg.includes("invalid email")) {
      setError("Please enter a valid email address.");
    } else if (errorMsg.includes("expired")) {
      setError("Verification code has expired. Please request a new one.");
    } else {
      setError("An error occurred. Please try again later.");
    }
  };

  const handleOAuthSignIn = async (provider: OAuthProvider): Promise<void> => {
    try {
      setPending(true);
      await signIn(provider, { flow: "signUp" });
    } catch (error) {
      setError("Authentication failed");
    } finally {
      setPending(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resendOTP = async (): Promise<void> => {
    try {
      setPending(true);
      await signIn("resend-otp", {
        email: formData.email,
        flow: "signUp"
      });
      setError("New verification code sent!");
    } catch (error: any) {
      handleError(error);
    } finally {
      setPending(false);
    }
  };

  const renderInitialForm = (): JSX.Element => (
    <form onSubmit={handleInitialSubmit} className="space-y-4">
      <Input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
        disabled={pending}
        required
      />
      <Input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
        disabled={pending}
        required
      />
      <div className="relative">
        <Input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          disabled={pending}
          required
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-0 top-0 h-full hover:bg-transparent text-white/60"
        >
          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </Button>
      </div>
      <div className="relative">
        <Input
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          disabled={pending}
          required
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-0 top-0 h-full hover:bg-transparent text-white/60"
        >
          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </Button>
      </div>
      <Button
        type="submit"
        className="w-full bg-white text-black hover:bg-white/90"
        disabled={pending}
      >
        Continue
      </Button>
    </form>
  );

  const renderOTPVerification = (): JSX.Element => (
    <form onSubmit={handleOTPVerification} className="space-y-4">
      <div className="text-white/80 text-sm mb-4">
        We've sent a verification code to {formData.email}
      </div>
      <Input
        name="code"
        type="text"
        placeholder="Enter verification code"
        value={formData.code}
        onChange={handleInputChange}
        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
        disabled={pending}
        required
        pattern="[0-9]*"
        inputMode="numeric"
        maxLength={6}
      />
      <div className="flex gap-4">
        <Button
          type="submit"
          className="flex-1 bg-white text-black hover:bg-white/90"
          disabled={pending}
        >
          Verify and Create Account
        </Button>
        <Button
          type="button"
          variant="outline"
          className="border-white/20 text-white hover:bg-white/10"
          onClick={resendOTP}
          disabled={pending}
        >
          <span className='text-white'>Resend Code</span>
        </Button>
      </div>
      <Button
        type="button"
        variant="ghost"
        className="w-full border-white/20 text-white hover:bg-white/10"
        onClick={() => setStep("initial")}
        disabled={pending}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>
    </form>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full"
    >
      <Card className="bg-black/60 backdrop-blur-lg border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Create your account</CardTitle>
          <CardDescription className="text-white/60">
            {step === "initial" 
              ? "Get started with your new account"
              : "Verify your email to continue"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm flex items-center gap-2">
              <TriangleAlert className="h-4 w-4" />
              {error}
            </div>
          )}
          {step === "initial" ? renderInitialForm() : renderOTPVerification()}

          {step === "initial" && (
            <>
              <div className="mt-6">
                <Separator className="bg-white/20" />
                <div className="mt-6 space-y-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    onClick={() => handleOAuthSignIn("google")}
                    disabled={pending}
                  >
                    <FcGoogle className="mr-2 h-5 w-5" />
                    Continue with Google
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    onClick={() => handleOAuthSignIn("github")}
                    disabled={pending}
                  >
                    <FaGithub className="mr-2 h-5 w-5" />
                    Continue with GitHub
                  </Button>
                </div>
              </div>

              <p className="mt-6 text-center text-sm text-white/60">
                Already have an account?{" "}
                <button
                  onClick={() => setState("signIn")}
                  className="text-blue-400 hover:text-blue-300 hover:underline focus:outline-none"
                >
                  Sign in
                </button>
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SignUpCard;