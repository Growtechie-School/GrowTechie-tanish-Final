"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { Eye, EyeOff } from "lucide-react";

export function SignInForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { emailId, password } = formData;

    if (!emailId || !password) {
      setError("Both fields are mandatory.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/growtect/Mentor&Mentee/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Sign-in failed.");
      }

      console.log("Sign-in successful:", result);

      // Determine the user role
      let userRole;
      if (result.mentor) {
        userRole = "Mentor";
      } else if (result.mentee) {
        userRole = "Mentee";
      } else {
        throw new Error("Unable to determine user role. Please contact support.");
      }

      // Redirect based on user role
      if (userRole === "Mentor") {
        router.push("/teachersprofiledetails");
      } else {
        router.push("/");
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthRedirect = (provider: string) => {
    const redirectUrl = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/${provider}`;
    window.location.href = redirectUrl;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full max-w-lg mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mb-2 text-center">
        Welcome back to Growtechie
      </h2>
      <p className="text-neutral-600 text-sm dark:text-neutral-300 mb-6 text-center">
        Sign in to your Growtechie account
      </p>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <form className="space-y-4 font-bold text-xl text-neutral-800" onSubmit={handleSubmit}>
        <LabelInputContainer>
          <Label htmlFor="emailId">Email</Label>
          <Input
            id="emailId"
            name="emailId"
            placeholder="you@example.com"
            type="email"
            value={formData.emailId}
            onChange={handleChange}
            disabled={isLoading}
            required
            className="text-black dark:text-white"
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              placeholder="••••••••"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
              required
              className="pr-10 text-black dark:text-white"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-gray-500" />
              ) : (
                <Eye className="h-4 w-4 text-gray-500" />
              )}
            </button>
          </div>
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign in"} &rarr;
          <BottomGradient />
        </button>
      </form>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      <div className="flex flex-col space-y-4">
        <button
          className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="button"
          onClick={() => handleOAuthRedirect("github")}
          disabled={isLoading}
        >
          <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            Sign in with GitHub
          </span>
          <BottomGradient />
        </button>
        <button
          className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="button"
          onClick={() => handleOAuthRedirect("google")}
          disabled={isLoading}
        >
          <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            Sign in with Google
          </span>
          <BottomGradient />
        </button>
      </div>

      <div className="text-center mt-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};