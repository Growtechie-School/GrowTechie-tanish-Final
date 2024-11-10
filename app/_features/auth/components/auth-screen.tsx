"use client";
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import  SignUpCard  from "./sign-up-card"
import { SignInCard } from './sign-in-card';
import { Github, Twitter, Linkedin } from "lucide-react";

const AuthScreen = () => {
  const [state, setState] = useState("signIn");
  
  const socialLinks = [
    // {
    //   name: "Discord",
    //   icon: <Discord className="h-5 w-5" />,
    //   color: "hover:text-[#24292F]"
    // },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      color: "hover:text-[#1DA1F2]",
      link: "https://x.com/growtechie"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      color: "hover:text-[#0A66C2]",
      link: ""
    }
  ];

  return (
    <div className="min-h-screen flex">

      {/* Right Section - 40% (Black) */}
      <div className="flex-1 lg:w-[40%] min-h-screen pt-20">
        <div className="w-full max-w-md mx-auto p-8">
          {/* Auth header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-white">
              GROWTECHIE 
            </h1>
            <p className="text-gray-400">Sign in</p>
          </div>

          {/* Auth cards */}
          <AnimatePresence mode="wait">
            {state === "signIn" ? (
              <SignInCard key="signin" setState={setState} />
            ) : (
              <SignUpCard key="signup" setState={setState} />
            )}
          </AnimatePresence>

          {/* Social links */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-center text-sm text-gray-400 mb-4">
              Connect with us on social media
            </p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  className={`text-gray-400 transition-colors ${social.color}`}
                  aria-label={`Connect with us on ${social.name}`}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gray-900/50 blur-3xl rounded-full" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gray-800/50 blur-3xl rounded-full" />
      </div>
    </div>
  );
};

export default AuthScreen;